import mongoose from 'mongoose'

let photoSchema = new mongoose.Schema({
    titulo: String,
    url: String,
    description: String,
    nombre: String
})

export const Photo = mongoose.model('Photo', photoSchema)