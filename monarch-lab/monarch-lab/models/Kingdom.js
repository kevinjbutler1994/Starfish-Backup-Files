import mongoose from 'mongoose'

const kingdomSchema = new mongoose.Schema({
    title: String,
    extract: String,
})

export default mongoose.model('Kingdom', kingdomSchema)