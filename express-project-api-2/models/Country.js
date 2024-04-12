import mongoose from 'mongoose'

const Schema = mongoose.Schema


let CountrySchema = new Schema ({
    // "_id": {type: String},
    "name": {type: String},
    "capital": {type: String},
    "region": {type: String},
    "languages": [{type: String}],
})

export default mongoose.model("countries", CountrySchema)