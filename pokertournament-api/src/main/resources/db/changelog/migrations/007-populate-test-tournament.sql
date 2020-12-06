--changeset author:chuckpilon id:populate-test-tournament
-- This is needed for referential integrity, but it doesn't do anything yet.
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
