"use strict";
exports.__esModule = true;
var Movie_1 = require("./Movie");
var Profesional_1 = require("./Profesional");
var express = require('express');
var router = express.Router();
var fs = require('fs');
var peliculas = [];
router.route("/")
    .get(function (req, res) {
    var id = req.query.id;
    fs.readFile("./peliculas.json", "utf-8", function (err, data) {
        if (!err) {
            Object.assign(peliculas, JSON.parse(data));
            if (id !== undefined) {
                id = Number(id);
                var found = false;
                var i = 0;
                while (!found && i < peliculas.length) {
                    found = id === peliculas[i].id;
                    if (found) {
                        res.send(peliculas[i]);
                    }
                    i++;
                }
                if (!found) {
                    res.sendStatus(404);
                }
            }
            else {
                res.send(peliculas);
            }
        }
        else {
            console.log(err);
            res.sendStatus(500);
        }
    });
})
    .post(function (req, res) {
    var pelicula = null;
    var actors = [];
    var q = req.body;
    q.actors.forEach(function (actor) {
        actors.push(new Profesional_1.Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height), actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", actors.length));
    });
    var director = new Profesional_1.Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height), q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0);
    var writer = new Profesional_1.Professional(q.writer.name, Number(q.writer.age), q.writer.genre, Number(q.writer.wheight), Number(q.writer.height), q.writer.hair, q.writer.eyes, q.writer.race, q.writer.retired === 'true', q.writer.from, q.writer.oscars, "Writer", 0);
    pelicula = new Movie_1.Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, writer, q.url, peliculas.length);
    peliculas.push(pelicula);
    fs.writeFile("./peliculas.json", JSON.stringify(peliculas), "utf-8", function (err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            console.log("writen succesfully");
            res.sendStatus(201);
        }
    });
})
    .put(function (req, res) {
    var id = req.query.id;
    fs.readFile("./peliculas.json", "utf-8", function (err, data) {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            Object.assign(peliculas, JSON.parse(data));
            id = Number(id);
            var found = false;
            var i = 0;
            while (!found && i < peliculas.length) {
                found = id === peliculas[i].id;
                if (found) {
                    var actor = req.body.actors[i];
                    for (var j = 0; j < peliculas[i].actors.length; j++) {
                        peliculas[i].actors[j].name = actor.name;
                        peliculas[i].actors[j].age = Number(actor.age);
                        peliculas[i].actors[j].genre = actor.genre;
                        peliculas[i].actors[j].wheight = Number(actor.wheight);
                        peliculas[i].actors[j].height = Number(actor.height);
                        peliculas[i].actors[j].hairColor = actor.hair;
                        peliculas[i].actors[j].eyeColor = actor.eyes;
                        peliculas[i].actors[j].race = actor.race;
                        peliculas[i].actors[j].isRetired = actor.retired === 'true';
                        peliculas[i].actors[j].nationality = actor.from;
                        peliculas[i].actors[j].oscarsNum = actor.oscars;
                    }
                    var q = req.body.director;
                    peliculas[i].director.name = q.name;
                    peliculas[i].director.age = Number(q.age);
                    peliculas[i].director.genre = q.genre;
                    peliculas[i].director.wheight = Number(q.wheight);
                    peliculas[i].director.height = Number(q.height);
                    peliculas[i].director.hairColor = q.hair;
                    peliculas[i].director.eyeColor = q.eyes;
                    peliculas[i].director.race = q.race;
                    peliculas[i].director.isRetired = q.retired === 'true';
                    peliculas[i].director.nationality = q.from;
                    peliculas[i].director.oscarsNum = q.oscars;
                    q = req.body.writer;
                    peliculas[i].writer.name = q.name;
                    peliculas[i].writer.age = Number(q.age);
                    peliculas[i].writer.genre = q.genre;
                    peliculas[i].writer.wheight = Number(q.wheight);
                    peliculas[i].writer.height = Number(q.height);
                    peliculas[i].writer.hairColor = q.hair;
                    peliculas[i].writer.eyeColor = q.eyes;
                    peliculas[i].writer.race = q.race;
                    peliculas[i].writer.isRetired = q.retired === 'true';
                    peliculas[i].writer.nationality = q.from;
                    peliculas[i].writer.oscarsNum = q.oscars;
                    fs.writeFile("./peliculas.json", JSON.stringify(peliculas), "utf-8", function (err) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                        else {
                            console.log("writen succesfully");
                            res.sendStatus(200);
                        }
                    });
                }
                i++;
            }
            if (!found) {
                res.sendStatus(404);
            }
            else {
                res.sendStatus(202);
            }
        }
        else {
            console.log(err);
            res.sendStatus(500);
        }
    });
})["delete"](function (req, res) {
    var id = req.query.id;
    fs.readFile("./peliculas.json", "utf-8", function (err, data) {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            Object.assign(peliculas, JSON.parse(data));
            id = Number(id);
            var found = false;
            var i = 0;
            while (!found && i < peliculas.length) {
                found = id === peliculas[i].id;
                if (found) {
                    peliculas.splice(i, 1);
                    fs.writeFile("./peliculas.json", JSON.stringify(peliculas), "utf-8", function (err) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        }
                        else {
                            console.log("writen succesfully");
                            res.sendStatus(200);
                        }
                    });
                }
                i++;
            }
            if (!found) {
                res.sendStatus(404);
            }
        }
        else {
            res.sendStatus(500);
        }
    });
});
module.exports = router;
