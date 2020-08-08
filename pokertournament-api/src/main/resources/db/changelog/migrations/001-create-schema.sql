--changeset author:chuckpilon id:create-schema

-- TODO: Usee league-based tables (e.g. tables) as templates that must be copied over when creating a tournament.
-- For example, Pocket Aces 2020 has tables defined. When  a new Pocket Aces 2020 tournament is created, the league
-- tables for the basis for the tournament tables

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

CREATE INDEX players_idx_name ON players (last_name ASC, first_name ASC);

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

CREATE TABLE tournament_structures (
    tournament_id INT NOT NULL,
    PRIMARY KEY (tournament_id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

CREATE TABLE tournament_levels (
    id SERIAL,
    tournament_id INT NOT NULL,
    level_order SMALLINT,
    name VARCHAR(50),
    is_break BOOLEAN,
    duration_seconds INT,
    small_blind INT,
    big_blind INT,
    ante INT,
    message VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournament_structures (tournament_id)
);

CREATE TABLE tables (
    id SERIAL,
    tournament_id INT NOT NULL,
    name VARCHAR(20),
    seats SMALLINT,
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

CREATE TABLE tournament_current_state (
    tournament_id INT NOT NULL,
    level_status_code INT NOT NULL,
    current_level SMALLINT,
    duration_remaining_seconds INT,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (tournament_id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

CREATE TABLE tournament_state_history (
    id SERIAL,
    tournament_id INT NOT NULL,
    level_status_code INT NOT NULL,
    current_level SMALLINT,
    duration_remaining_seconds INT,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id)
);

CREATE TABLE table_status (
    id SERIAL,
    tournament_id INT,
    table_id INT NOT NULL,
    active BOOLEAN NOT NULL,
    open_seats SMALLINT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id),
    FOREIGN KEY (table_id) REFERENCES tables (id)
);

CREATE TABLE seating (
    id SERIAL,
    tournament_id INT,
    table_id INT NOT NULL,
    player_id INT,
    seat SMALLINT,
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id),
    FOREIGN KEY (table_id) REFERENCES tables (id),
    FOREIGN KEY (player_id) REFERENCES players (id),
    UNIQUE (tournament_id, player_id)
);

CREATE TABLE reservations (
    id SERIAL,
    tournament_id INT NOT NULL,
    player_id INT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (tournament_id, player_id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id),
    FOREIGN KEY (player_id) REFERENCES players (id)
);

CREATE TABLE buyins (
    id SERIAL,
    tournament_id INT NOT NULL,
    player_id INT NOT NULL,
    amount MONEY NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tournament_id) REFERENCES tournaments (id),
    FOREIGN KEY (player_id) REFERENCES players (id)
);
