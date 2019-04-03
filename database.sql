CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "players" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "user_id" INT REFERENCES "user"  
);

CREATE TABLE "courses" (
    "id" SERIAL PRIMARY KEY,
    "course" VARCHAR (90) NOT NULL
);


CREATE TABLE "games" (
    "id" SERIAL PRIMARY KEY,
    "game_id" INTEGER,
    "player_id" INT REFERENCES "players",
    "course_id" INT REFERENCES "courses",
    "date" TIMESTAMP,
    "score" INTEGER,
    "hole_1" INTEGER,
    "hole_2" INTEGER,
    "hole_3" INTEGER,
    "hole_4" INTEGER,
    "hole_5" INTEGER,
    "hole_6" INTEGER,
    "hole_7" INTEGER,
    "hole_8" INTEGER,
    "hole_9" INTEGER,
    "hole_10" INTEGER,
    "hole_11" INTEGER,
    "hole_12" INTEGER,
    "hole_13" INTEGER,
    "hole_14" INTEGER,
    "hole_15" INTEGER,
    "hole_16" INTEGER,
    "hole_17" INTEGER,
    "hole_18" INTEGER
);


INSERT INTO "games" ("game_id", "player_id", "course_id", "score", "hole_1", "hole_2", "hole_3", "hole_4", "hole_5", "hole_6", "hole_7", "hole_8" , "hole_9" ,    "hole_10" ,    "hole_11" ,    "hole_12" ,    "hole_13" ,    "hole_14" ,    "hole_15" ,    "hole_16" ,    "hole_17" , "hole_18", "date")
VALUES ('1', '1', '1', '54', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '03/17/2019');

INSERT INTO "games" ("game_id", "player_id", "course_id", "score", "hole_1", "hole_2", "hole_3", "hole_4", "hole_5", "hole_6", "hole_7", "hole_8" , "hole_9" ,    "hole_10" ,    "hole_11" ,    "hole_12" ,    "hole_13" ,    "hole_14" ,    "hole_15" ,    "hole_16" ,    "hole_17" , "hole_18", "date")
VALUES ('1', '2', '1', '53', '2', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '03/17/2019');

INSERT INTO "players" ("name", "user_id")
VALUES ('PatrickZ', '1');


INSERT INTO "players" ("name", "user_id")
VALUES ('Clint', '2');