import mongoose from "./connection.js";

const Schema = mongoose.Schema

const beverageSchema = new Schema ({
    "beverage-name": String,
    "brand": String,
    "beverage-type": String,
    "contains-sugar": Boolean,
    "carbonated": Boolean,
    "container": String
})

export default mongoose.model ('beverages', beverageSchema
)