DROP TABLE IF EXISTS animals;

CREATE TABLE IF NOT EXISTS animals (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  species varchar(255),
  age INT NOT NULL,
  size varchar(255),
  colour varchar(255)
);