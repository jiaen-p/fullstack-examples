import mongoose, { Schema } from 'mongoose'
import { Song } from './Song'
const artistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    songs: [{type: Schema.Types.ObjectId, ref: Song}]
})

export const Artist = mongoose.model('Artist', artistSchema)

