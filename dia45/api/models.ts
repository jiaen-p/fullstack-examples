import mongoose from 'mongoose'

let discoSchema = new mongoose.Schema({
    titulo: String,
    interprete: String,
    anyoPublicacion: Number
})

export const Disco = mongoose.model('Disco', discoSchema)