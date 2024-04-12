import mongoose from "./connection.js";

const Schema = mongoose.Schema

const PenpalsSchema = new Schema ({
    "to": String,
    "from": String,
    "message": String,
    "sentOn": String
})

export default mongoose.model ('penpals', PenpalsSchema)