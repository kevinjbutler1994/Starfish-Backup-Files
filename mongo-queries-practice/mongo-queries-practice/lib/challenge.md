<!-- # MongoDB CLI

## Getting Started

The prompts below each ask for you to write the query in MongoDB for performing
some action (described in the prompt). Your response should be a valid query and
it should be property formatted in Markdown. For example:

**Prompt:** Find all burgers in the `burgers` collection.

db.burgers.find({}) -->

<!-- 
### Instructions

* Start your `mongo` server
* Connect to the `mongo` shell

### Prompts

**Prompt:** What is the command to start the `mongo` server?



**Prompt:** What is the command to connect to the `mongo` shell?

mongosh

**Prompt:** What is the command for listing all `mongo` databases?

show dbs

**Prompt:** What command would you use to create a database called `burgers`?

use burgers

**Prompt:** What command would you use to add the collection `burger` to your
`burgers` database?

db.burgers.insertOne({ name: 'burger'})

**Prompt:** What is the command for listing all collections in a database?
db.burgers.find() -->

<!-- ## Inserting -->

<!-- ### Prompts

**Prompt:** Insert a single burger into the `burgers` collection with the
following:

* a `patty` property set to `beef`


db.burgers.insertMany({ name: 'burger'} {patty: 'beef} {cheese: false} {toppings ['ketchup, 'onions' 'pickles']})


> db.burgers.update(
  {"name": "burger"},
  { $set: { cheese: "false" }}

db.burgers.insertMany({ name: 'burger'} {cheese: false} {toppings ['ketchup, 'onions' 'pickles']})

* a `toppings` set to an array with `ketchup`, `onions`, and `pickles`

db.burgers.insertMany({ name: 'burger'} {cheese: false} {toppings ['ketchup, 'onions' 'pickles']})
 -->

<!-- 
**Prompt:** Insert 10 burgers into the `burgers` collection with the following:

* a `patty` property that is set to one of: `beef`, `turkey`, or `veggie`
* a `cheese` property that is either `true` or `false`
* a `toppings` property that is either one of `ketchup`, `onions`, `pickles`,
  `mustard`, and `mayonnaise` -->

<!-- db.burgers.insertMany([{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']} {name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}{name: 'burger', patty: 'beef', cheese: true, toppings: ['ketchup',' mayonnaise']}]) -->




  

<!-- ## Reading

The following prompts will have you querying (reading) from your `burger`
collection. If you don't have burgers in your database that match the query
criteria described below, you wont get any results back. So, add one or two that
match that criteria before running the query.

### Prompts

**Prompt:** What query would find all burgers with a `beef` patty? -->

<!-- db.burgers.find({patty: "beef"}); -->

<!-- **Prompt:** What query would find all burgers with cheese on them? -->


<!-- db.burgers.find({cheese: true}); -->

<!-- **Prompt:** What query would find a burger by it's ObjectId? -->


<!-- db.burgers.find({ObjectId: () }); -->

<!-- **Prompt:** What query would find all burgers with `ketchup` as a topping? -->

<!-- db.burgers.find({toppins: ketchup}); -->

<!-- **Prompt:** What query would find all burgers with either a turkey or veggie
patty? -->


<!-- db.burgers.find({patty: 'turkey'} , patty: 'veggie'}); -->

<!-- **Prompt:** What query would find all burgers with a beef patty and cheese? -->

<!-- db.burgers.find({patty: "beef", cheese: true}); -->
<!-- 
**Prompt:** What query would find all burgers with a beef patty and ketchup as
a topping? -->


<!-- db.burgers.find({patty: "beef", toppings: [ketchup]}); -->

<!-- **Prompt:** What query would find all burgers with a beef patty and both onions
and pickles as toppings? -->


<!-- db.burgers.find({patty: "beef", toppings [onions, pickples] ]); -->

<!-- 
**Prompt:** What query would find burgers with either a turkey patty or cheese? -->


<!-- db.burgers.find({patty: "turkey" $or cheese: true }); -->
<!-- ## Update

### Prompts

**Prompt:** What query would update one burger by it's ObjectId, setting it's
"patty" to "pork"? -->

<!-- db.burgers.update(
  {ObjectId: 123456789,
  $set: { patty: "pork" }}
) -->
<!-- 
**Prompt:** What query would update all burgers with beef paddies to have
cheese? (i.e. set "cheese" to true)

db.burgers.updateAll(
  {patty: 'beef,
  $set: { cheese: true }}
) --> -->
<!-- 
## Delete

### Prompts

**Prompt:** What query would delete a burger by it's ObjectId?
)
db.burgers.deleteOne
 ({ObjectID: 123456789})

**Prompt:** What query would delete all veggie burgers?

db.burgers.deleteMany ({patty: 'veggie'})

**Prompt:** What query would delete all burgers with pickles on them?
db.burgers.deleteMany ({toppings: ['pickles']})