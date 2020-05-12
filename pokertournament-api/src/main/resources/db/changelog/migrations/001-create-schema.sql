--changeset author:chuckpilon id:create-schema
CREATE TABLE users (
    username VARCHAR(255) NOT NULL,
    enabled BOOLEAN NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE authorities (
    id SERIAL,
    authority VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE players (
    id SERIAL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(75),
    mobile_phone VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE leagues (
    id SERIAL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(100),
    email VARCHAR(75),
    PRIMARY KEY (id)
);

CREATE TABLE tournament_status (
    code SMALLINT NOT NULL,
    description VARCHAR(50) NOT NULL,
    PRIMARY KEY (code)
);

CREATE TABLE tournaments (
    id SERIAL,
    league_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100),
    hosted_by VARCHAR(50) NOT NULL,
    scheduled_start TIMESTAMP WITH TIME ZONE NOT NULL,
    location VARCHAR(100),
    status_code SMALLINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (league_id) REFERENCES leagues (id),
    FOREIGN KEY (status_code) REFERENCES tournament_status (code)
);

CREATE TABLE tournament_levels (
    id SERIAL,
    tournament_id INT NOT NULL,
    level SMALLINT,
    duration_seconds INT,
    small_blind INT,
    big_blind INT,
    ante INT,
    message VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

CREATE TABLE tournament_breaks (
    id SERIAL,
    tournament_id INT NOT NULL,
    after_level SMALLINT,
    duration_seconds SMALLINT,
    message VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);
