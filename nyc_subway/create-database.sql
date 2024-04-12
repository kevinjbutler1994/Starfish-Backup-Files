-- Create the database
CREATE DATABASE nyc_subway;

-- Create an admin user for our app to use
CREATE USER nyc_subway_admin WITH PASSWORD 'password';

-- Give that user permissins to manage the database:
GRANT ALL PRIVILEGES ON DATABASE nyc_subway TO nyc_subway_admin;
