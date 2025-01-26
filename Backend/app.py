from flask import Flask, request, redirect, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysql-connector://root:MHMABN1&6abel@localhost/'

users -> id (INT, primary key, auto_increment)
    -> username string (20)
    -> password string(50)
    -> created_at (datatime)

staffs -> id(same shit)
    -> name (same)
    -> email string(50)
    -> password (same)
    -> created_at (same)

rooms -> id(same)


"General Manager", "Assitant General Manager", "Operations Manager", "Finance Manager", "Human Resource Manager", 