![monarchs and kingdoms ](https://media.git.generalassemb.ly/user/41550/files/1cbd6696-4b19-4582-aac7-a5e9c78de54f)


# Monarchs: A Seeding Exercise

So far in this unit, you have spent some time creating models and seeding data
into your database. Seeding data can get a little more complicated when you have
nested models, or models that contain subdocuments consisting of other collections of data.

In this exercise, you will need to consider how to structure your Schema, and subsequently seed your database so that we can nest these two data sets.

You have been provided with starter code that includes raw JSON data. Your objective is to create models and seed the desired data a local database using Mongoose, making sure each monarch contains the kingdom
over which they reigned.

## Prerequisites

- Node & NPM
- MongoDB
- Mongoose
- Data Modeling
- Database Seeding

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Install dependencies.
4. Fulfill the listed requirements.

## Requirements

Before you begin, take some time to familiarize yourself with the data provided.
Once you have done this,fulfill the requirements below.

**Hint:** You will not need to make any adjustments to the raw data or `db/connection.js` files. **You will only be working with your `models` and the files located in the `db/seed` directory.**

1. **Create a `Monarch` model** that includes the following properties and their appropriate data types: `name`, `house`, `start`, `end`, `endReason` and `kingdom`.

2. **Create a `Kingdom` model** that includes the following properties and their appropriate data types: `title` and `extract`.

3. **In `00--seed-collections.js`**, map throught the monarch raw data (from the
   JSON) to create a new array of objects that only includes the properties
   needed in the Monarch model. 
      - **3a.** In the same file, follow a similar process to map through the kingdom raw
   data to create a new array of objects that only includes the necessary
   properties.
      - **3b.** Still in `00--seed-collections.js`, use the new arrays of monarch and kingdom
   data to seed their respective collections in your local database.
      - **3c.** Use the command `node db/seed/00--seed-collections.js` and confirm your local database
   has the collections for both Monarchs and Kingdoms.

   **At this point, there will not be a `"kingdom"` field for each monarch.**

4. **In `01--seed-nested-models.js`**, seed your data in a way that updates the
   monarchs collection to include the kingdom over which each
   monarch reigned.

   One way to do this is to get all of the Monarchs from the database (**Hint:**
   using Mongoose). This is important because we can _save_ each document when
   we update it to add the kingdom as we iterate through the array of documents
   we get from the Mongoose query.

   If we import the original raw JSON for each Monarch, we can use the `"name"` property for each Monarch document (from you database) to _find_
   that monarch's raw JSON data.

   Since the JSON has the String name of the Kingdom, we can use a Mongoose
   query for Kingdoms (from your database) to find that Kingdom, and then set the monarch's `"kingdom"` property to the value of the `Kingdom` document, and presto!

5. **Use the command `node db/seed/01--seed-nested-models.js`** to seed the nested model
   fields in your local database.

6. Open your Mongo Shell and check the database to verify.

## Bonus

Use the `.populate` method to display the `name` and `extract` from each kingdom
in the monarchs collection.

[Mongoose Documentation on Query Population](https://mongoosejs.com/docs/3.4.x/docs/populate.html)

## Deliverable

**This is a deliverable.** Please submit a pull request.
