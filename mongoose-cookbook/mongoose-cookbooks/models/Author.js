// models/Author.js

// Import Mongoose
let mongoose = require("../db/connection")
const Schema = mongoose.Schema;

// Create our "schema" for our Author model
let authorSchema = new Schema(
  // firstName and lastName are our properties
  {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 25
    }
  }
);


export default mongoose.model('authors', authorsSchema)
