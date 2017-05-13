CREATE DATABASE burgers_db;
USE burgers_db;
-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
date_ DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);