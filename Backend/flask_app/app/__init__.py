from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:@localhost/hotel_db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True

    db.init_app(app)
    CORS(app)
    migrate.init_app(app=app, db=db)

    from .routes import main
    app.register_blueprint(main)

    return app

