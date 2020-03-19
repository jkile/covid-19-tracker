
DROP DATABASE IF EXISTS covid19;

CREATE DATABASE covid19;
<<<<<<< HEAD
=======
USE covid19;

CREATE TABLE selfReporting (
    dateOf DATE,
    state CHAR(2),
    achespains BOOLEAN NOT NULL default false,
    runnynose BOOLEAN NOT NULL default false,
    sorethroat BOOLEAN NOT NULL default false,
    cough BOOLEAN NOT NULL default  false,
    fever BOOLEAN NOT NULL default false,
    difficultyBreathing BOOLEAN NOT NULL default false,
    othersymptoms VARCHAR(140) 
);

CREATE TABLE statecovids (
    date DATE,
    state CHAR(2),
    positive DECIMAL(10,4) NOT null default 0,
    negative DECIMAL(10,4) NOT null default 0,
    pending DECIMAL(10,4) NOT null default 0,
    death DECIMAL(10,4) NOT null default 0,
    total DECIMAL(10,4) NOT null default 0
);

>>>>>>> 1966a62d7889207cde332c8c4a1dcf25ccdc7e86
