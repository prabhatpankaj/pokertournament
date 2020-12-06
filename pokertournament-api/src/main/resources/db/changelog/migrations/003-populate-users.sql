--changeset author:chuckpilon id:populate-schema
INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('chuck.pilon@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Chuck', 'Pilon');
INSERT INTO authorities (authority, username) VALUES ('ROLE_ADMIN', 'chuck.pilon@gmail.com');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'chuck.pilon@gmail.com');

INSERT INTO users (username, enabled, password, first_name, last_name) VALUES ('jerry.hanson@gmail.com', true, '{bcrypt}$2a$10$Ntihf6TA.pbNJu5NFgRhzuEruJ2dXwFIkBTu/TkP/1K3ZBwHklLym', 'Jerry', 'Hanson');
INSERT INTO authorities (authority, username) VALUES ('ROLE_USER', 'jerry.hanson@gmail.com');
