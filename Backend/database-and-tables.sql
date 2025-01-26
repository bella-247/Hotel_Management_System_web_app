-- CREATE DATABASE hotel_db;
-- USE hotel_db;

-- -- USERS

-- CREATE TABLE Users (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     username VARCHAR(100) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     phone_number VARCHAR (15) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- STAFFS

-- CREATE TABLE Staffs (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     role ENUM("General Manager", "Assistant General Manager", "Operations Manager", "Finance Manager", "Human Resource Manager", "Sales and Marketing Manager","Front Desk Manager", "Receptionist", "Concierge", "Bellboy", "Night Auditor","Housekeeping Manager", "Room Attendant", "Public Area Attendant", "Laundry Staff", "Maintainance Manager", "Engineer","Food and Beverage Manager", "Restaurant Manager", "Bartender", "Barista", "Sommelier", "Head Chef", "Sous Chef", "Pastry Chef", "Line Cook", "Dishwasher", "Banquet Manager","Spa Manager", "Massage Therapist", "Esthetician", "Fitness Trainer","Security Manager", "Security Guard", "Fire Safety Officer","Event Manager", "Banquet Server", "Setup Crew","IT Manager", "IT Support Technician","Gift Shop Manager", "Retail Sales Associate", "Kid's Club Attendant","Valet Attendant", "Chauffeur", "Florist") NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- ROOMS

-- CREATE TABLE Rooms (                     
--     id INT AUTO_INCREMENT PRIMARY KEY, 
--     room_number VARCHAR(10) NOT NULL UNIQUE,
--     room_type ENUM("Single", "Double", "Family", "Suite", "Deluxe") DEFAULT "Single",
--     price_per_night DECIMAL(10, 2) NOT NULL,
--     availability BOOLEAN DEFAULT TRUE
-- );


-- BOOKINGS
-- CREATE TABLE Bookings (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     room_id INT NOT NULL,
--     check_in DATE NOT NULL,
--     check_out DATE NOT NULL,
--     total_price DECIMAL (10,2) NOT NULL,
--     status ENUM("Confirmed", "Pending", "Cancelled") DEFAULT "Pending",
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,        
--     FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
--     FOREIGN KEY (room_id) REFERENCES Rooms(id) ON DELETE CASCADE
-- );

-- CREATE TABLE Payments (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     booking_id INT NOT NULL, 
--     amount DECIMAL (10, 2) NOT NULL,
--     payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     payment_method ENUM("Credit Card", "Cash"),
--     status ENUM ("Completed", "Pending", "Canceled") DEFAULT "Pending",
--     FOREIGN KEY (booking_id) REFERENCES Bookings(id) ON DELETE CASCADE 
-- );


-- CREATE TABLE Reviews (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     room_id INT NOT NULL,
--     rating INT CHECK (rating BETWEEN 1 AND 5),
--     review_header TEXT NOT NULL,
--     review TEXT NOT NULL,
--     review_type ENUM("Positive", "Constructive") DEFAULT "Positive",
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
--     FOREIGN KEY (room_id) REFERENCES Rooms(id) ON DELETE CASCADE
-- );