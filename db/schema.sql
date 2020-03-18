DROP DATABASE IF EXISTS covid19;

CREATE DATABASE covid19;
USE covid19;

CREATE TABLE statecovid (
    dateOf DATE,
    state CHAR(2),
    positive INT NOT null default 0,
    negative INT NOT null default 0,
    pending INT NOT null default 0,
    death INT NOT null default 0,
    total INT NOT null default 0
)

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
)