import mongoose from 'mongoose'

const monarchSchema = new mongoose.Schema({
    name: String,
    house: String,
    start: Number,
    end: Number,
    endReason: String,
    kingdom: Object
})

export default mongoose.model('Monarch', monarchSchema)