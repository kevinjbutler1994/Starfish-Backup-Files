# Mongoose Artists

Work through the prompts to get your own practice with:

* Defining Mongoose Schemas and Models
* Validating a Schema
* Querying a Schema

## Instructions

1.  Fork and clone this repository.
2.  Change into the new directory.
3.  Install dependencies.


## Step 1: Connect to Mongoose

- Use npm to install `mongoose`
- Create a folder called `db`
- Create a file inside of `db` called `connection.js`
- Establish a connection to the database inside of a `connection.js` file

## Step 2: Define a Schema

- Create a folder called `models`
- Create a file called `Artist.js` inside of the `models` directory
- Import your database connection object from `connection.js`
- Using the mongoose `Schema` class, define a schema for an Artist
- Use `mongoose.model()` to turn your schema into model
- Export your model from `Artist.js`

## Step 3: Validate Your Schema

Add the following properties and validation to your Artist schema:;

- `name`:
  - String
  - At least 2 characters long
  - Required
  - Unique
- `genre`:
  - String
  - From the following list: Pop, Rock, Blues, Hip Hop, Jazz, Folk, Country, Classical, and Rap
- `songs`:
  - Should be an array of instances of a `Song` Schema:
    - `title`:
      - String
      - Required
      - Unique
    - `album`:
      - String
    - `length`: (Song length, in seconds)
      - Number
      - Greater than 1

Be sure to reference the documentation on [Schema
types](https://mongoosejs.com/docs/schematypes.html) and
[Validation](https://mongoosejs.com/docs/validation.html).

## Step 4: Query Your Model

- Create an `index.js` file
- Import your Artist model in your `index.js` file
- Insert two artists, each with 3 songs
- Query for those artists inside of MongoDB

## Deliverable
This is a deliverable. Please turn this in via a pull request.
