import mongoose from 'mongoose'

let profesionalShema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        enum:["male","female"]
    },
    weight: Number,
    height: Number,
    nationality: String,
    isRetired: Boolean,
    profesion: {
        type: String,
        enum:["actor", "director", "writer"]
    },
    hairColor: String,
    eyeColor: String,
    race: String,
    oscarNum: Number
})

export const Profesional = mongoose.model('Profesional', profesionalShema)