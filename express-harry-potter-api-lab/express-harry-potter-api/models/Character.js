import mongoose from 'mongoose'

const Schema = mongoose.Schema


let CharacterSchema = new Schema ({

    "_id": {type: String},
    "name": {type: String},
    "capitol": {type: String},
    "region": {type: String},
    "languages": [{type: String}]

})

export default mongoose.model("countries", CountrySchema)


