import mongoose, { mongo } from 'mongoose'
import { Song } from './models/Song'
import { Artist } from './models/Artist'
import { Album } from './models/Album'

mongoose.connect("mongodb://localhost:27017/codenotch", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.catch(err => console.log(err))
// Artist.find({_id: "5ee757c059e4612cc9a23045"})
// .populate("songs")
// .exec()
// .then(data => console.log(data[0].toJSON().songs[0].title))
// .catch(err => console.log(err))

/*
let artists = []
for (let i = 1; i < 5; i++){
    let artist = new Artist({
        name: "Artist "+i,
        age: 120,
        songs:[]
    })
    artists.push(artist._id)
    artist.save()
    .catch(err => console.error(err))
}
let songs = []
for (let i = 1; i< 12; i++){
    let song = new Song({
        title: "Song " + i,
        lenght: Math.floor(Math.random()*20)*10
    })
    songs.push(song._id)
    song.save()
    .catch(err => console.log(err))
}

let album = new Album({
    title: "Album Many",
    nSongs: songs.length,
    songs:songs,
    artist: artists
})
album.save()
.catch(err => console.log(err))

*/

Album.find({_id: "5ee757c059e4612cc9a23054"})
.populate('songs')
.populate('artist')
.exec()
.then(data => {
    console.log(data)
})
.catch(err => console.error(err))
// ---------------------------------------
// ONE2MANY
/*
let songs =[]
for (let i = 1 ; i < 6; i++){
    let song = new Song({
        title: "song" + i,
        length: 120
    })
    songs.push(song)
    song.save()
    .catch(err => console.log(err))
}
let artist = new Artist({
    name: "Artist 1",
    age: 25,
    songs: songs
})
artist.save()
*/

// ------------------------------------------
// ONE2ONE
/*

song1.save()
.then(res => {
    let artist = new Artist({
        name: "artist 1",
        age: 24,
        songs: [res._id]
    })
    artist.save()
    .then(res => {
        console.log("saved\n", res)
    })
})
.catch(err => console.error(err))

Artist.find({_id: "5ee749ace93e236d5ba3b097"})
.populate('songs')
.exec()
.then( data => {
    console.log(data)
})
.catch(err => console.error(err))

*/

