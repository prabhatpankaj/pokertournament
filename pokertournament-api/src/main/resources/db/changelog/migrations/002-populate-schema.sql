--changeset author:chuckpilon id:populate-schema
INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('chuck.pilon@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Chuck', 'Pilon');
INSERT INTO authorities (authority, username) VALUES ('ROLE_ADMIN', 'chuck.pilon@gmail.com');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'chuck.pilon@gmail.com');

INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('jerry.hanson@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Jerry', 'Hanson');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'jerry.hanson@gmail.com');

INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tim', 'Abbs', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Kyle', 'Anderson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Douglas', 'Becker', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Whitey', 'Belz', 'whiteyp@yahoo.com', '‭+1 (651) 829-0921');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Dave', 'Bennett', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Cameron', 'Boyd', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Bruce', 'Brunner', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Roger', 'Burgwald', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('John', 'Chaney', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Rick', 'Cheeseman', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mark', 'Cotton', 'cotton6@comcast.net', '‭+1 (651) 324-8812‬');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Bryce', 'Cruey', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tim', 'Culbertson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Erik', 'Erdell', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Erik', 'Ganeles', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Dan', 'Goettl', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Aleksey', 'Gonikman', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Anatoliy', 'Gonikman', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Johannes', 'Grosen', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Jerry', 'Hanson', NULL, '+‭1 (612) 220-8714');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Swede', 'Hanson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Joe', 'Hart', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Rian', 'Heaslip', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Adam', 'Hendrickson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Aaron', 'Hushagen', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Andy', 'Huttner', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mike', 'Isabella', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tim', 'Jarvis', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Don', 'Kessler', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Jerry', 'Knutson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tyler', 'Knutson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Everett', 'Larson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Brad', 'Lein', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Brian', 'Lunseth', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('John', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mike', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Ron', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tom', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Joe', 'Marrs', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mitch', 'Martin', 'mitch24@gmail.com', '‭+1 (612) 810-7813‬');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Casey', 'Mereness', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Jim', 'Morgan', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mike', 'Motzko', NULL, '+‭1 (651) 491-2908');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Troy', 'Pfeifer', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Chuck', 'Pilon', 'chuck.pilon@gmail.com', '+1 (651) 246-9625');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Brad', 'Raymer', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Corey', 'Risty', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Dean', 'Running', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Dave', 'Schmaltz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Dmitry', 'Sonkin', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Greg', 'Strantz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Carter', 'Swenson', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Matt', 'Trok', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Kurt', 'Trushenski', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Roger', 'Walsh', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('David', 'Weinard', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Seth', 'Weisinger', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Chad', 'Zabel', NULL, NULL);


INSERT INTO leagues (name, location, email) VALUES ('2018 Pocket Aces', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 'pocket.aces.mn@gmail.com');
INSERT INTO leagues (name, location, email) VALUES ('2019 Pocket Aces', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 'pocket.aces.mn@gmail.com');
INSERT INTO leagues (name, location, email) VALUES ('2020 Pocket Aces', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 'pocket.aces.mn@gmail.com');

INSERT INTO tournament_status (code, description) VALUES (1, 'Scheduled');
INSERT INTO tournament_status (code, description) VALUES (2, 'In Progress');
INSERT INTO tournament_status (code, description) VALUES (3, 'Completed');
INSERT INTO tournament_status (code, description) VALUES (4, 'Canceled');

INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 1', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-01-10 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 3);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 2', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-01-31 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 3);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 3', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-02-28 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 3);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 4', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-03-27 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 5', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-04-24 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 6', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-05-15 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 7', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-06-05 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 8', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-07-10 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 9', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-07-31 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 10', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-08-28 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 11', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-09-25 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 4);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 12', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-10-23 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Final Event', null, 'Pocket Aces', '2020-11-14 17:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);

INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Test Event', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', 
DATE_TRUNC('day', now() + interval '1 day') + interval '19 hours', 
'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);

INSERT INTO tournament_structures (tournament_id) 
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')));

INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 0, FALSE, 'Level 1', 30, 5, 10, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 1, FALSE, 'Level 2', 30, 10, 20, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 2, FALSE, 'Level 3', 30, 15, 30, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 3, FALSE, 'Level 4', 30, 25, 50, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 4, TRUE, 'First Break', 900, 0, 0, 0, 'Chip up $5 (End Rebuy)');
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 5, FALSE, 'Level 5', 30, 50, 100, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 6, FALSE, 'Level 6', 30, 75, 150, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 7, FALSE, 'Level 7', 30, 100, 200, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 8, FALSE, 'Level 8', 30, 150, 300, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 9, TRUE, 'Second Break', 600, 0, 0, 0, 'Chip up $25');
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 10, FALSE, 'Level 9', 30, 200, 400, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 11, FALSE, 'Level 10', 30, 300, 600, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 12, FALSE, 'Level 11', 30, 500, 1000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 13, FALSE, 'Level 12', 30, 700, 1400, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 14, TRUE, 'Third Break', 600, 0, 0, 0, 'Chip up $100 & $500');
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 15, FALSE, 'Level 13', 30, 1000, 2000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 16, FALSE, 'Level 14', 30, 1500, 2000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 17, FALSE, 'Level 15', 30, 2000, 4000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 18, FALSE, 'Level 16', 30, 3000, 6000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 19, FALSE, 'Level 17', 30, 5000, 10000, 0, null);
INSERT INTO tournament_levels (tournament_id, level_order, is_break, name, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 20, TRUE, 'Fourth Break', 300, 0, 0, 0, 'Chip up $500');

INSERT INTO tables (tournament_id, name, seats) 
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 'Spades', 10);
INSERT INTO tables (tournament_id, name, seats) 
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 'Diamonds', 9);
INSERT INTO tables (tournament_id, name, seats) 
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 'Clubs', 8);
INSERT INTO tables (tournament_id, name, seats) 
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 'Hearts', 10);

-- Not sure if this should be an insert into tournament_current_state when a tournament is created
-- or something enforced in code.
INSERT INTO tournament_current_state (tournament_id, level_status_code, current_level, duration_remaining_seconds, timestamp)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 0, -1, 0, NOW());

INSERT INTO table_status (tournament_id, table_id, active)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), TRUE);
INSERT INTO table_status (tournament_id, table_id, active)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Diamonds'), TRUE);
INSERT INTO table_status (tournament_id, table_id, active)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), FALSE);
INSERT INTO table_status (tournament_id, table_id, active)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), FALSE);

INSERT INTO reservations (tournament_id, player_id, timestamp)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 4, NOW());
INSERT INTO reservations (tournament_id, player_id, timestamp)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 11, NOW());
INSERT INTO reservations (tournament_id, player_id, timestamp)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 45, NOW());

INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 36, 1);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 37, 2);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 40, 4);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 54, 5);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 43, 6);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Spades'), 38, 8);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Diamonds'), 18, 1);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Diamonds'), 17, 5);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Diamonds'), 20, 8);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), 28, 0);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), 50, 2);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), 26, 3);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), 24, 4);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Clubs'), 19, 6);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 29, 0);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 6, 1);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 53, 2);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 42, 5);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 12, 6);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 57, 7);
INSERT INTO seating (tournament_id, table_id, player_id, seat)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), (SELECT(id) FROM tables WHERE name = 'Hearts'), 23, 9);
