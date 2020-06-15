import mongoose, { Schema } from 'mongoose'
import {Song} from './Song'
import {Artist} from './Artist'
let albumSchema = new mongoose.Schema({
    title: String,
    nSongs: Number,
    songs:[{ type: Schema.Types.ObjectId, ref: Song }],
    artist:[{type: Schema.Types.ObjectId, ref: Artist}]
})

export const Album = mongoose.model("Album", albumSchema)