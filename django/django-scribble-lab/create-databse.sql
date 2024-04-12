-- Create the database
CREATE DATABASE scribble_database;

-- Create an admin user for our app to use
CREATE USER scribble_database_admin WITH PASSWORD 'password';

-- Give that user permissins to manage the database:
GRANT ALL PRIVILEGES ON DATABASE scribble_database TO nscribble_database_admin;
