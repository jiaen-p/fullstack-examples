import mongoose, { Schema } from 'mongoose'

let photoSchema = new mongoose.Schema({
    titulo: String,
    url: String,
    description: String,
    user: {type: Schema.Types.ObjectId, ref:'User'}
})

export const Photo = mongoose.model('Photo', photoSchema)