
CREATE DATABASE DB;

USE `DB`;

CREATE TABLE weather_data (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  datetime datetime NOT NULL,
  humidity double NOT NULL,
  temperature double NOT NULL,
  min_temperature double NOT NULL,
  max_temperature double NOT NULL
);

CREATE TABLE auth_token (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  token VARCHAR(36) NOT NULL,
  is_valid boolean DEFAULT false
);

INSERT INTO auth_token VALUES (1, 'ba33e7c4-1173-40cb-9662-e090eebd6f67',1);