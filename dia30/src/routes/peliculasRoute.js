"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Peliculas_1 = require("../models/Peliculas");
var Profesionales_1 = require("../models/Profesionales");
exports.router = express_1.Router();
exports.router.route("/")
    .get(function (req, res) {
    var id = req.query.id;
    var search = {};
    id ? search = { _id: id } : null;
    Peliculas_1.Pelicula.find(search, function (err, data) {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
            res.send(err);
        }
    });
})
    .post(function (req, res) {
    var q = req.body;
    var peli = new Peliculas_1.Pelicula({
        title: q.title,
        releaseYear: q.releaseYear,
        actors: q.actors,
        directors: q.directors,
        writers: q.writers,
        language: q.language,
        nationality: q.nationality,
        platform: q.platform,
        distributor: q.distributor,
        isMCU: q.isMCU,
        producer: q.producer,
        url: q.url,
        genre: q.genre
    });
    peli.save()
        .then(function (saved) {
        res.send(saved);
    })
        .catch(function (err) { return res.send(err); });
})
    .put(function (req, res) {
    var q = req.body;
    var id = req.query.id;
    if (id) {
        var peli = {
            title: q.title,
            releaseYear: q.releaseYear,
            actors: q.actors,
            directors: q.directors,
            writers: q.writers,
            language: q.language,
            nationality: q.nationality,
            platform: q.platform,
            distributor: q.distributor,
            isMCU: q.isMCU,
            producer: q.producer,
            url: q.url,
            genre: q.genre
        };
        Peliculas_1.Pelicula.findOneAndUpdate({ _id: id }, peli, function (err, data) {
            if (!err) {
                res.send(data);
            }
            else {
                res.send(err);
            }
        });
    }
    else {
        res.sendStatus(400);
    }
})
    .delete(function (req, res) {
    var id = req.query.id;
    Peliculas_1.Pelicula.findByIdAndDelete(id)
        .then(function () {
        res.sendStatus(200);
    })
        .catch(function (err) {
        res.send(err);
    });
});
exports.router.route("/:pro")
    .get(function (req, res) {
    var id = req.query.idPelicula || req.query.id;
    var p = req.params.pro;
    p === 'guionista' ? p = 'writer' : null;
    var option = {};
    option[p + 's'] = 1;
    option["_id"] = 0;
    Peliculas_1.Pelicula.find({ _id: id }, option, function (err, data) {
        if (!err && data) {
            var profesionales = data[0][p + 's'];
            var query = { "name": profesionales, "profesion": p };
            Profesionales_1.Profesional.find(query)
                .then(function (data) {
                err ? res.sendStatus(500) : res.send(data);
                if (err) {
                    console.error(err);
                }
            })
                .catch(function (err) { return console.error(err); });
        }
        else {
            console.error(err);
        }
    });
})
    .post(function (req, res) {
    var id = req.query.idPelicula || req.query.id;
    var p = req.params.pro;
    p === 'guionista' ? p = 'writer' : null;
    var q = req.body;
    if (q.name) {
        var pro = {
            name: q.name,
            age: q.age,
            gender: q.gender,
            weight: q.weight,
            height: q.height,
            nationality: q.nationality,
            isRetired: q.isRetired,
            profesion: p,
            hairColor: q.hairColor,
            eyeColor: q.eyeColor,
            race: q.race,
            oscarNum: q.oscarNum
        };
        var query = {};
        query["name"] = q.name;
        query["profesion"] = p;
        Profesionales_1.Profesional.findOneAndUpdate(query, pro, { upsert: true, new: true })
            .catch(function (err) { return console.error(err); });
        var update = {};
        update[p + 's'] = q.name;
        Peliculas_1.Pelicula.findByIdAndUpdate(id, { $addToSet: update }, { new: true })
            .then(function (r) {
            res.send(r);
        })
            .catch(function (err) {
            console.error(err);
            res.sendStatus(500);
        });
    }
    else {
        res.sendStatus(400);
    }
})
    .delete(function (req, res) {
    var id = req.query.idPelicula || req.query.id;
    var p = req.params.pro;
    var name = req.query.name;
    p === 'guionista' ? p = 'writer' : null;
    var del = {};
    del[p + 's'] = name;
    Peliculas_1.Pelicula.updateOne({ _id: id }, { $pull: del }, { new: true }, function (err, data) {
        if (!err) {
            res.send(data);
        }
        else {
            res.sendStatus(500);
            console.error(err);
        }
    });
});
