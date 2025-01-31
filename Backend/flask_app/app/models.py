from sqlalchemy import Enum
from . import db
from datetime import datetime


class RoomTypes(db.Model):
    __tablename__ = "roomTypes"

    id = db.Column(db.Integer, primary_key = True)
    room_type = db.Column(Enum("Single", "Double", "Family", "Suite", "Deluxe"), default = "Single")
    price = db.Column(db.Float, nullable = False)

    rooms = db.relationship("Rooms", backref = 'rooms', lazy='joined')
    
    def __repr__(self):
        return f"<{self.type} - {self.price}>"
    


class Room(db.Model):
    __tablename__ = "rooms"

    id = db.Column(db.Integer, primary_key = True)
    room_number = db.Column(db.String(10), nullable = False, unique = True, index = True)
    availability = db.Column(db.Boolean, default = True)
    type_id = db.Column(db.Integer, db.ForeignKey('roomTypes.id'), nullable = False)

    roomType = db.relationship("RoomTypes", backref = "roomTypes")

    def __repr__(self):
        return f"<Room {self.room_number}, '{self.roomType.type}', {'Available' if self.availability else 'Reserved'} - ${self.roomType.price}>"
    





# if __name__ == "__main__":

















