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