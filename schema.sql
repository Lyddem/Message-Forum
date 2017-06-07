DROP DATABASE IF EXISTS message_forum;

CREATE DATABASE message_forum;

USE message_forum;

CREATE TABLE messages (
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(id),
	author VARCHAR(50),
	message VARCHAR(250)
)
