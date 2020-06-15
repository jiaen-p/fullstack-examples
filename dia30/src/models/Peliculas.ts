import mongoose, { mongo } from 'mongoose'

let peliculaSchema = new mongoose.Schema({
    title: String,
    realeaseYear: Number,
    actors: [String],
    directors: [String],
    writers: [String],
    language: String,
    nationality: String,
    platform: String,
    distributor: String,
    isMCU: Boolean,
    producer: String,
    url: String,
    genre: String
})

export const Pelicula = mongoose.model('Pelicula', peliculaSchema)