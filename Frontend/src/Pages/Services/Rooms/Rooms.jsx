import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./Rooms.css";

const Rooms = () => {
    const [searching, setSearching] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [roomsCategory, setRoomsCategory] = useState({});

    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/rooms")
            .then((response) => {
                // console.log("Rooms", response.data);
                setRooms(response.data);
                // Categorize rooms by their types
                const categorizedRooms = response.data.reduce((acc, room) => {
                  if (!acc[room.room_type]) {
                    acc[room.room_type] = [];
                    }
                    acc[room.room_type].push(room);
                    return acc;
                    }, {});

                    // for(const category in categorizedRooms){
                    //   categorizedRooms[category] = sortRooms(categorizedRooms[category])
                    //   console.log(categorizedRooms[category])
                    // };
                    // new Promise(resolve=>{
                    //   resolve(Object.keys(categorizedRooms).map(category=>{
                    //     categorizedRooms[category] = sortRooms(categorizedRooms[category])
                    //   }))
                    // }).then(()=>{
                    //   setRoomsCategory(categorizedRooms);
                    // })
                    // Object.keys(categorizedRooms).sort(
                    //   (a,b) => {a[0].price_per_night - b[0].price_per_night}
                    // )
                    

                setRoomsCategory({
                    Single: sortRooms(
                      response.data.filter(
                        (room) => room.room_type === "Single"
                    )),
                    Double: sortRooms(response.data.filter(
                        (room) => room.room_type === "Double"
                    )),
                    Family: sortRooms(response.data.filter(
                        (room) => room.room_type === "Family"
                    )),
                    Suite: sortRooms(response.data.filter(
                        (room) => room.room_type === "Suite"
                    )),
                    Deluxe: sortRooms(response.data.filter(
                        (room) => room.room_type === "Deluxe"
                    )),
                });
                // setRoomsCategory(roomsCategory);
                console.log("Rooms Category", roomsCategory);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    const sortRooms = (rooms) => {
      return rooms.sort((a,b)=>{Number(b.room_number) - Number(a.room_number)}
    )};


    const search = (val) => {
        if (val.length > 0) {
            setSearching(true);
        } else {
            setSearching(false);
        }
    };

    return (
        <main>
            <div className="header-container">
                <h1 className="hotel-rooms-header">Hotel Rooms</h1>
                <div className="search-container">
                    <input
                        type="search"
                        className="search-bar"
                        placeholder="Search by Room Number..."
                        // onClick={(e)=>search(e.target.value)}
                        onChange={(e) => search(e.currentTarget.value)}
                    />
                    <FaSearch className="search-icon" />
                </div>
            </div>
            {rooms && !searching && (
                <div className="room-categories-whole-container">
                    {Object.keys(roomsCategory).map((category) => {
                        const roomsInCategory = roomsCategory[category];
                        return (
                            <div
                                className="room-category-container"
                                key={category}
                            >
                                {roomsInCategory && (
                                    <div
                                        className="room-category"
                                        key={category}
                                    >
                                        <h3
                                            className="room-types-header"
                                            key={category + "-header"}
                                        >
                                            {category} Rooms - ${" "}
                                            {roomsInCategory[0] &&
                                                roomsInCategory[0][
                                                    "price_per_night"
                                                ]}
                                        </h3>

                                        {roomsInCategory.length > 0 ? (
                                            <ul
                                                className="rooms-list-container"
                                                key={
                                                    category + "-list-container"
                                                }
                                            >
                                                {roomsInCategory.map((room) => {
                                                    return (
                                                        // alternative key
                                                        <li
                                                            className="rooms-list"
                                                            key={`${category}-${room.room_number}`}
                                                        >
                                                            Room{" "}
                                                            {room.room_number}{" "}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        ) : (
                                            <p className="empty-room-list-indicator">
                                                All Rooms Reserved
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </main>
    );
};

export default Rooms;
