CREATE DATABASE quizmachine;

CREATE TABLE player (
id SERIAL PRIMARY KEY,
name VARCHAR(3) NOT NULL
);

CREATE TABLE game (
  id SERIAL PRIMARY KEY,
  score INT NOT NULL,
  questions INT NOT NULL,
  player_id INT NOT NULL,
  FOREIGN KEY (player_id) REFERENCES player (id)
);

INSERT INTO player VALUES (1, 'JOE');
INSERT INTO player VALUES (2, 'BEN');
INSERT INTO player VALUES (3, 'ANG');
INSERT INTO player VALUES (4, 'SAN');
ALTER SEQUENCE player_id_seq RESTART WITH 5 INCREMENT BY 1;

INSERT INTO game VALUES (1, 15, 8, 1);
INSERT INTO game VALUES (2, 25, 10, 2);
INSERT INTO game VALUES (3, 18, 7, 3);
INSERT INTO game VALUES (4, 15, 8, 4);
INSERT INTO game VALUES (5, 25, 10, 3);
INSERT INTO game VALUES (6, 18, 7, 2);
INSERT INTO game VALUES (7, 15, 8, 1);
INSERT INTO game VALUES (8, 25, 10, 2);
INSERT INTO game VALUES (9, 18, 7, 4);
ALTER SEQUENCE game_id_seq RESTART WITH 10 INCREMENT BY 1;