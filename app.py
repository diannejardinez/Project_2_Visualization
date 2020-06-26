import os

import pandas as pd
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Lathalu1@localhost:5432/Project2Database"

db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(db.engine, reflect=True)

print(db.engine.table_names())

# Save references to each table
medals_by_year = Base.classes.medals_by_year

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/test")
def testingDB():
    result  =  medals_by_year.query.all()
    return jsonify(result)

if __name__ == "__main__":
    app.run()