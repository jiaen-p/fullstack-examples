import mongoose, { Schema } from 'mongoose'
import { Song } from './Song'
import { Album } from './Album'
const artistSchema = new mongoose.Schema({
    name: String,
    age: Number,
    songs: [{type: Schema.Types.ObjectId, ref: Song}],
    album: [{type: Schema.Types.ObjectId, ref: Album}]
})

export const Artist = mongoose.model('Artist', artistSchema)

