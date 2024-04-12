import mongoose from 'mongoose'

const countrySchema = new mongoose.Schema({
    name: String,
    capital: String,
    region: String,
    population: Number
})

export default mongoose.model('Country', countrySchema)
