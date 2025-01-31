from flask import Blueprint, jsonify, request
from . import db
from .models import Room

main = Blueprint("main", __name__)

@main.route("/api/rooms", methods=["GET"]) # define api route
def get_rooms():
    try:
        rooms =  Room.query.all()
        for room in rooms:
            print(room)
        room_list = [
                {
                    "id" : room.id,
                    "room_number" : room.room_number,
                    "room_type" : room.room_type,
                    "price_per_night" : room.price_per_night,
                    "availability" : room.availability
                }
                for room in rooms
            ]

        return jsonify(room_list)
    
    except Exception as e:
        return jsonify({
            "error" : str(e)
        }),  500


    # room_list = [
    #     {"id" : 1, "room_number": '101', "room_type" : "Single", "availability" : True, "price_per_night" : 45},
    #     {"id" : 2, "room_number": '201', "room_type" : "Double", "availability" : True, "price_per_night" : 45},
    # ]

    # return jsonify(room_list)

# @main.route("/api/rooms/add", methods = ["POST"])
# def addRooms():
#     if request.method == "POST":
#         room = request.json
#         try:
#             new_room = Room(
#                         room_number = room["room_number"],
#                         room_type = room["room_type"],
#                         price_per_night = room["price_per_night"]
#                     )

#             db.session.add(new_room)
#             db.session.commit()

#             print("Room added successfully")
#             return jsonify(room)

#         except Exception as e:
#             db.session.rollback()
#             return jsonify({
#                 "error" : str(e)

#             }), 500