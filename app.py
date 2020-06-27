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
# print(Base.classes.keys())
Athletes = Base.classes.athletes


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """Return the homepage."""
    return render_template("index.html")


# Query the database and send the jsonified results
@app.route('/api/total-medals')
def total_medals():
    """ 
    Return the the total number of medals won by all the countrie in Summer Olympics held after 1980 
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



@app.route('/api/event/body-composition/<gender>')
def gender_body_comosition(gender):
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


@app.route('/api/test2')
def test_2():
    return "Work in progress Route test2"


@app.route('/api/test3')
def test_3():
    return "Work in progress Route test3"



if __name__ == '__main__':
    app.run()