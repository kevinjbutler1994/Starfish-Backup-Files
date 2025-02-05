# SQL Lab

<img src="https://i.imgur.com/OGKTx2f.jpg">

# Where In The World Is Carmen Sandiego?

## Introduction

#### Use SQL to find Carmen Sandiego

We're going to use what we've learned already about querying a database using SQL commands to to chase down and capture an elusive and world-renowned thief, Carmen Sandiego!

**This is an excellent lab to collaborate with classmates on!**

## Setup

This lab requires `*.sql` files used to create a database with tables that contain data about locations across the 🌎...

1. Fork and clone this repository.

2. Move into the newly created **sql-lab** folder:
    ```
    cd sql-lab
    ```
3. Open VS Code:
    ```
    code .
    ```
4. Open a terminal session (`control + backtick`) and run `ls` - you should see three files: `clues.sql`, `world.sql` & `solution.sql`.

5. Start the `psql` interactive terminal:
    ```
    psql
    ```
6. Create a database named `carmen` and connect to it:
    ```sql
    CREATE DATABASE carmen;
    \c carmen
    ```
7. Run the following command to run **world.sql** that creates `city`, `country` & `countrylanguage` tables and seeds their data using the:
    ```sql
    \i world.sql
    ```

## Exercises

The goal is to figure out what city Carmen Sandiego is heading to so that she can be met by the proper authorities.

You'll be writing SQL queries within **clues.sql** to answer each clue.

Check your progress by running the queries that you write in **clues.sql** using:
    ```
    \i clues.sql
    ```

## Hints

- Use the psql `\d` & `\d tablename` commands to list & display the schema of each of the three tables.

- Google and collaborate to reach the goal of finding out where Carmen's destination is.

- For example, you'll certainly need to know about the [ORDER BY](http://www.postgresqltutorial.com/postgresql-order-by/) clause.

- Try not to peek too much at **solution.sql**.

## Additional Resources

- [PostgreSQL official documentation](http://www.postgresql.org/docs/)

## Encore 

If you finish this exercise and want to learn more about SQL, do some of [these exercises here](https://pgexercises.com/).
