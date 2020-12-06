--changeset author:chuckpilon id:populate-test-schedule
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 1', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-01-08 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 2', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-01-29 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 3', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-02-26 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 4', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-03-26 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 5', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-04-23 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 6', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-05-14 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 7', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-06-04 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 8', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-07-09 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 9', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-07-30 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 10', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-08-27 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 11', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-09-24 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Event 12', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', '2021-10-22 19:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Final Event', null,                                   'Pocket Aces', '2021-11-14 17:00:00', 'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);

INSERT INTO tournaments (league_id, name, description, hosted_by, scheduled_start, location, status_code) 
VALUES ((SELECT(id) FROM leagues WHERE name = '2021 Pocket Aces'), '2021 Pocket Aces Test Event', '$40 Buy-in, $40 Rebuy (through level 4)', 'Pocket Aces', 
DATE_TRUNC('day', now() + interval '1 day') + interval '19 hours', 
'Mike Lutz - 8216 125th Street Savage, MN 55378', 1);
