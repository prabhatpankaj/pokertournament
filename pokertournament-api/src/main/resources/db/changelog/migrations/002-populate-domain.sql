--changeset author:chuckpilon id:populate-domain
INSERT INTO tournament_status (code, description) VALUES (1, 'Scheduled');
INSERT INTO tournament_status (code, description) VALUES (2, 'In Progress');
INSERT INTO tournament_status (code, description) VALUES (3, 'Completed');
INSERT INTO tournament_status (code, description) VALUES (4, 'Canceled');
