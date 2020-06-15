import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
    title: String,
    lenght: Number
})

export const Song = mongoose.model('Song', songSchema)