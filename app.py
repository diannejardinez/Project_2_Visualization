import os

import pandas as pd
# import numpy as np

from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine


from flask import Flask, jsonify, render_template
# from sqlalchemy import inspect
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################

app = Flask(__name__)
# app.config['DEBUG'] = True

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost:5432/Olympics"
#conn = engine.connect()
#salary_df = pd.read_sql("SELECT * FROM salaries", conn)
db = SQLAlchemy(app)
# db.init_app(app)

# inspector = inspect(db.engine)
# print(inspector.get_table_names())


# # reflect an existing database into a new model
Base = automap_base()
# # reflect the tables
Base.prepare(db.engine, reflect=True)

# print(db.engine.table_names())
# print(Base.metadata.tables.keys())
# print(Base.classes.keys())
# Save references to each table

Athletes = Base.classes.athletes


# print(pd.read_sql_query('select * from athletes', con=db.engine).head())

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


# @app.route('/')
# def home():
#     return "Hello World!"


# Query the database and send the jsonified results

@app.route('/api/all_athletes')
def entire_data_0():
    """Return the complete database for all athletes"""
    sel = [
            Athletes.id,
            Athletes.name,
            Athletes.sex,
            Athletes.age,
            Athletes.height,
            Athletes.weight, 
            Athletes.country,
            Athletes.noc,
            Athletes.games,
            Athletes.year,
            Athletes.season,
            Athletes.city,
            Athletes.sport,
            Athletes.event,
            Athletes.medal
            ]

    results = db.session.query(*sel).all()

    all_athletes = []

    for id, name, sex, age, height, weight, country, noc, games,\
    year, season, city, sport, event, medal in results:
        altlete_dict = {}
        altlete_dict["name"] = name
        altlete_dict["sex"] = sex
        altlete_dict["age"] = age
        altlete_dict["height"] = height
        altlete_dict["weight"] = weight
        altlete_dict["country"] = country
        altlete_dict["noc"] = noc
        altlete_dict["games"] = games
        altlete_dict["year"] = year
        altlete_dict["season"] = season
        altlete_dict["city"] = city
        altlete_dict["sport"] = sport
        altlete_dict["event"] = event
        altlete_dict["medal"] = medal
        
        
        all_athletes.append(altlete_dict)

    # Return a list of the column names (sample names)
    return jsonify(all_athletes)


@app.route('/api/test1')
def test_1():
    return "Work in progress Route test1"


@app.route('/api/test2')
def test_2():
    return "Work in progress Route test2"


@app.route('/api/test3')
def test_3():
    return "Work in progress Route test3"



if __name__ == '__main__':
    app.run()