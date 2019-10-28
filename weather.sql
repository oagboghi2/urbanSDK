DROP DATABASE IF EXISTS weather;
CREATE DATABASE weather;

\c weather;

CREATE TABLE weather (
    ID SERIAL PRIMARY KEY,
    temperature INTEGER,
    speed VARCHAR
);

INSERT INTO weather(temperature, speed) VALUES (79, 'S');