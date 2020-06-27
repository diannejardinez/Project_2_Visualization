from flask import Flask, jsonify, render_template
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import func, desc
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost:5432/olympics_db"
db = SQLAlchemy(app)
db.init_app(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to the table in database
Athletes = Base.classes.athletes


#################################################
# Flask Routes
#################################################

# Flask Route 1
@app.route("/")
def home():
    """Return the homepage."""
    return render_template("index.html")


# Flask Route 2
# Query the database and send the jsonified results
@app.route("/api/all-medal-winners/<country_name>")
@app.route("/api/all-medal-winners/<country_name>/<season>")
@app.route("/api/all-medal-winners/<country_name>/<season>/<year>")
def entire_data_dump(country_name=None, season=None, year=None):
    """Return the list for all player who won a medal in Olympics based on input parameter"""
    sel = [
            Athletes.games,
            Athletes.country,
            Athletes.name,
            Athletes.sex,
            Athletes.sport,
            Athletes.event,
            Athletes.medal
            ]

    results = db.session.query(*sel).filter(Athletes.medal.isnot(None))\
        .filter(Athletes.country.ilike(country_name))
    
    if season is not None:
        results = results.filter(Athletes.season.ilike(season))
    if year is not None:
        results = results.filter(Athletes.year == year)
   
    results = results.order_by(Athletes.games, Athletes.country, Athletes.sport, Athletes.event)
    
    all_athletes = []

    for games, country, name, sex, sport, event, medal in results.all():
        altlete_dict = {}
        altlete_dict["name"] = name
        altlete_dict["sex"] = sex
        altlete_dict["country"] = country
        altlete_dict["games"] = games
        altlete_dict["sport"] = sport
        altlete_dict["event"] = event
        altlete_dict["medal"] = medal
        
        all_athletes.append(altlete_dict)

    # Return a list of the column names (sample names)
    return jsonify(all_athletes)



# Flask Route 3
@app.route("/api/medals-tally/<selected_season>/<selected_year>")
def total_medal_tally(selected_season, selected_year):
    """ 
    INPUT: Enter season as summer or winter and Enter selected_year as YYYY
    OUTPUT:
    Return the the total number of gold, silver, bronze and total medals won by all the countries
    in the season and year selected in the route
    """

    subquery = db.session.query(Athletes.games, Athletes.season, Athletes.year,\
                         Athletes.country, Athletes.event, Athletes.medal)\
            .filter(Athletes.medal.isnot(None))\
            .filter(Athletes.year == selected_year)\
            .filter(Athletes.season.ilike(selected_season))\
            .distinct()\
            .subquery()

    medals_query = db.session.query(subquery.c.games, subquery.c.season,\
            subquery.c.year, subquery.c.country,\
            (func.count(subquery.c.medal).label('total_medals')),\
            func.count(subquery.c.medal).filter(subquery.c.medal == "Gold").label('gold_medals'),\
            func.count(subquery.c.medal).filter(subquery.c.medal == "Silver").label('silver_medals'),\
            func.count(subquery.c.medal).filter(subquery.c.medal == "Bronze").label('bronze_medals'))\
            .group_by(subquery.c.games, subquery.c.season,\
                      subquery.c.year, subquery.c.country)\
            .order_by(subquery.c.season, subquery.c.year,\
                      desc('total_medals'))\
            .all()

    all_medals = []

    for games, season, year, country, total_medals, gold, silver, bronze in medals_query:
    
        country_dict= {}
        country_dict["games"] = games
        country_dict["season"] = season
        country_dict["year"] = year
        country_dict["country"] = country
        country_dict["total_medals"] = total_medals
        country_dict["gold"] = gold
        country_dict["silver"] = silver
        country_dict["bronze"] = bronze
        all_medals.append(country_dict)

    return jsonify(all_medals)



# Flask Route 4
@app.route("/api/total-medals")
def total_medals():
    """ 
    Return the the total number of medals won by all the countries in Summer Olympics held after 1980 
    """
    subquery = db.session.query(Athletes.year, Athletes.country, Athletes.event, Athletes.medal)\
        .filter(Athletes.season == 'Summer')\
        .filter(Athletes.year >= 1980)\
        .filter(Athletes.medal.isnot(None))\
        .distinct()\
        .subquery()

    query_result = db.session.query(subquery.c.year, subquery.c.country, \
              func.count(subquery.c.medal).label('total_medals'))\
        .group_by(subquery.c.year, subquery.c.country)\
        .order_by(subquery.c.year, desc('total_medals'))\
        .all()
    
    all_country_medals = []

    for year, country, totalmedals in query_result:
        country_medals = {}
        country_medals["year"] = year
        country_medals["country"] = country
        country_medals["total medals"] = totalmedals
        all_country_medals.append(country_medals)

    return jsonify(all_country_medals)



# Flask Route 5
@app.route("/api/event/body-composition/<gender>")
def gender_body_composition(gender):
    """
    INPUT: Enter M or F for selecting gender
    OUTPUT: Return the the median age, height and weight of all Gold medal winners for all the events.
    The events are filter based on predefined list of selected sports.
    """
    selected_sports = ('Basketball', 'Boxing', 'Cycling', 'Figure Skating','Gymnastics',
                   'Judo', 'Rowing','Snowboarding','Speed Skating', 'Swimming',
                   'Tennis', 'Volleyball',  'Weightlifting', 'Wrestling')

    results = db.session.query(Athletes.event, Athletes.sport, 
        func.percentile_cont(0.5).within_group(Athletes.age).label('median age'),\
        func.percentile_cont(0.5).within_group(Athletes.height).label('median height'),\
        func.percentile_cont(0.5).within_group(Athletes.weight).label('median weight'))\
        .filter(Athletes.age.isnot(None))\
        .filter(Athletes.height.isnot(None))\
        .filter(Athletes.weight.isnot(None))\
        .filter(Athletes.medal == 'Gold')\
        .filter(Athletes.sex == gender)\
        .filter(Athletes.sport.in_(selected_sports))\
        .group_by(Athletes.event, Athletes.sport)\
        .all()

    event_body_composition = []

    for event, sport, medianAge, medianHeight, medianWeight in results:
        body_composition = {}
        body_composition["event"] = event
        body_composition["sport"] = sport
        body_composition["median age"] = medianAge
        body_composition["median height"] = medianHeight
        body_composition["median weight"] = medianWeight
        event_body_composition.append(body_composition)

    return jsonify(event_body_composition)



# Flask Route 6
@app.route("/api/sport/<selected_sport>")
# @app.route("/api/sport/<year_after>")
def sport_medals_country(selected_sport):
    """
    Return the top 10 countries which have won maximum medal in particular sport over the years specified.
    """
    results = db.session.query(Athletes.sport, Athletes.country,\
            func.count(Athletes.medal).label("medals_won"))\
            .filter(Athletes.sport.ilike(selected_sport))\
            .group_by(Athletes.sport, Athletes.country)\
            .order_by(Athletes.sport, desc("medals_won"))\
            .limit(10)

    sport_countries = []

    for sport, country, medals in results.all():
        country_dict = {}
        country_dict["sport"] = sport
        country_dict["country"] = country
        country_dict["medals"] = medals
        sport_countries.append(country_dict)
    
    return jsonify(sport_countries)



if __name__ == '__main__':
    app.run()