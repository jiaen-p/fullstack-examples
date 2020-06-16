"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Song_1 = require("./models/Song");
var Artist_1 = require("./models/Artist");
var Album_1 = require("./models/Album");
mongoose_1.default.connect("mongodb://localhost:27017/codenotch", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(function (err) { return console.log(err); });
// Artist.find({_id: "5ee757c059e4612cc9a23045"})
// .populate("songs")
// .exec()
// .then(data => console.log(data[0].toJSON().songs[0].title))
// .catch(err => console.log(err))
var artists = [];
for (var i = 1; i < 5; i++) {
    var artist = new Artist_1.Artist({
        name: "Artist " + i,
        age: 120,
        songs: [],
        album: []
    });
    artists.push(artist._id);
    artist.save()
        .catch(function (err) { return console.error(err); });
}
var songs = [];
for (var i = 1; i < 12; i++) {
    var song = new Song_1.Song({
        title: "Song " + i,
        lenght: Math.floor(Math.random() * 20) * 10
    });
    songs.push(song._id);
    song.save()
        .catch(function (err) { return console.log(err); });
}
var album = new Album_1.Album({
    title: "Album Many",
    nSongs: songs.length,
    songs: songs,
    artist: artists
});
album.save()
    .then(function () {
    artists.forEach(function (p) {
        var update = { "album": album._id, "songs": songs };
        console.log(album);
        Artist_1.Artist.findByIdAndUpdate(p, { $addToSet: update }, function (err, data) {
            if (err)
                throw err;
        });
    });
})
    .catch(function (err) { return console.log(err); });
Album_1.Album.find({ _id: "5ee757c059e4612cc9a23054" })
    .populate('songs')
    .populate('artist')
    .populate('album')
    .exec()
    .then(function (data) {
})
    .catch(function (err) { return console.error(err); });
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
.catch(err => console.log(err))
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
