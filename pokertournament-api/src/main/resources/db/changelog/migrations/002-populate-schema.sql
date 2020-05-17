--changeset author:chuckpilon id:populate-schema
INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('chuck.pilon@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Chuck', 'Pilon');
INSERT INTO authorities (authority, username) VALUES ('ROLE_ADMIN', 'chuck.pilon@gmail.com');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'chuck.pilon@gmail.com');

INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('jerry.hanson@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Jerry', 'Hanson');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'jerry.hanson@gmail.com');

INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Chuck', 'Pilon', 'chuck.pilom@gmail.com', '+1 (651) 246-9625');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Rob', 'Belz', 'whiteyp@yahoo.com', '‭+1 (651) 829-0921');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mark', 'Cotton', 'cotton6@comcast.net', '‭+1 (651) 324-8812‬');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mitch', 'Martin', 'mitch24@gmail.com', '‭+1 (612) 810-7813‬');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Jerry', 'Hanson', '', '+‭1 (612) 220-8714');
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Tom', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mike', 'Lutz', NULL, NULL);
INSERT INTO players (first_name, last_name, email, mobile_phone) VALUES ('Mike', 'Motzko', NULL, '+‭1 (651) 491-2908');

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
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 6*', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-05-17 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);

INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 1, 60, 5, 10, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 2, 60, 10, 20, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 3, 60, 15, 30, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 4, 60, 25, 50, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 5, 60, 50, 100, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 6, 60, 75, 150, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 7, 60, 100, 200, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 8, 60, 150, 300, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 9, 60, 200, 400, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 10, 60, 300, 600, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 11, 60, 500, 1000, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 12, 60, 700, 1400, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 13, 60, 1000, 2000, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 14, 60, 1500, 2000, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 15, 60, 2000, 4000, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 16, 60, 3000, 6000, 0, null);
INSERT INTO tournament_levels (tournament_id, level, duration_seconds, small_blind, big_blind, ante, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 17, 60, 5000, 10000, 0, null);

INSERT INTO tournament_breaks (tournament_id, after_level, duration_seconds, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 4, 900, 'Chip up $5 (End Rebuy)');
INSERT INTO tournament_breaks (tournament_id, after_level, duration_seconds, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 8, 600, 'Chip up $25');
INSERT INTO tournament_breaks (tournament_id, after_level, duration_seconds, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 12, 600, 'Chip up $100 & $500');
INSERT INTO tournament_breaks (tournament_id, after_level, duration_seconds, message)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 17, 300, 'Chip up $500');

INSERT INTO tournament_current_state (tournament_id, level_status_code, current_level, duration_remaining_seconds, timestamp)
VALUES (CURRVAL(pg_get_serial_sequence('tournaments', 'id')), 0, 0, 3600, '2020-06-05 18:00:00');

INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 7', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-06-05 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 8', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-07-10 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 9', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-07-31 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 10', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-08-28 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 11', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-09-25 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Event 12', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2020-10-23 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2020 Pocket Aces'), '2020 Pocket Aces Final Event', null, 'Pocket Aces', '2020-11-14 17:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
