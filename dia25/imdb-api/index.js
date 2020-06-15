"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var Profesional_1 = require("./Profesional");
var Movie_1 = require("./Movie");
var app = express();
var pro = null;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/profesional", function (req, res) {
    res.send(pro);
});
app.post("/professional", function (req, res) {
    var p = req.body;
    var retired = (p.isRetired === 'true');
    pro = new Profesional_1.Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, 0);
    res.send(pro.print());
});
app.put("/profesional", function (req, res) {
    var p = req.body;
    pro.name = p.name;
    pro.age = Number(p.age);
    pro.genre = p.genre;
    pro.wheight = Number(p.wheight);
    pro.height = Number(p.height);
    pro.hairColor = p.hairColor;
    pro.eyeColor = p.eyeColor;
    pro.race = p.race;
    pro.isRetired = (p.isRetired === 'true');
    pro.nationality = p.nationalitiy;
    pro.oscarsNum = Number(p.oscarsNum);
    pro.profession = p.profession;
    res.send(pro.print());
});
app["delete"]("/profesional", function (req, res) {
    pro = null;
    res.send(pro);
});
// ---------------------------------------------------
// profesional endpoint
var profesionales = [];
app.get("/profesionales", function (req, res) {
    var id = req.query.id;
    if (id !== undefined && id < profesionales.length) {
        var found = false;
        var i = 0;
        while (!found && i < profesionales.length) {
            found = (id === profesionales[i].id);
            if (found) {
                res.send(profesionales[i].print());
            }
            i++;
        }
    }
    else if (id >= profesionales.length) {
        res.sendStatus(400);
    }
    else {
        res.send(profesionales);
    }
});
app.post("/profesionales", function (req, res) {
    var p = req.body;
    var retired = (p.isRetired === 'true');
    profesionales.push(new Profesional_1.Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, profesionales.length));
    res.sendStatus(201);
});
app.put("/profesionales", function (req, res) {
    var id = Number(req.query.id);
    var pro = null;
    var found = false;
    var i = 0;
    while (!found && i < profesionales.length) {
        found = (id === profesionales[i].id);
        if (found) {
            pro = profesionales[i];
        }
        i++;
    }
    var p = req.body;
    pro.name = p.name;
    pro.age = Number(p.age);
    pro.genre = p.genre;
    pro.wheight = Number(p.wheight);
    pro.height = Number(p.height);
    pro.hairColor = p.hairColor;
    pro.eyeColor = p.eyeColor;
    pro.race = p.race;
    pro.isRetired = (p.isRetired === 'true');
    pro.nationality = p.nationalitiy;
    pro.oscarsNum = Number(p.oscarsNum);
    pro.profession = p.profession;
    res.sendStatus(202);
});
app["delete"]("/profesionales", function (req, res) {
    var id = req.query.id;
    if (id !== undefined) {
        profesionales.splice(id, 1);
        res.sendStatus(202);
    }
    else {
        res.sendStatus(400);
    }
});
// ---------------------------------------------------------
// pelicula endpoint
var pelicula = null;
app.route("/pelicula")
    .get(function (req, res) {
    if (pelicula !== null) {
        res.send(pelicula.print());
    }
    else {
        res.send("No movies");
    }
})
    .post(function (req, res) {
    var actors = [];
    var q = req.body;
    q.actors.forEach(function (actor) {
        actors.push(new Profesional_1.Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height), actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", actors.length));
    });
    var director = new Profesional_1.Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height), q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0);
    pelicula = new Movie_1.Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, q.url, 0);
    res.sendStatus(201);
})
    .put(function (req, res) {
    var q = req.body;
    pelicula.title = q.title;
    pelicula.actors = q.actors;
    pelicula.director = q.director;
    pelicula.releaseYear = q.year;
    pelicula.nationality = q.nationalitiy;
    pelicula.genre = q.genre;
    pelicula.url = q.url;
    res.sendStatus(202);
})["delete"](function (req, res) {
    pelicula = null;
    res.sendStatus(202);
});
// -------------
app.route("/pelicula/actor")
    .get(function (req, res) {
    var id = Number(req.query.id);
    var found = false;
    var i = 0;
    while (!found && i < pelicula.actors.length) {
        found = id === pelicula.actors[i].id;
        if (found) {
            res.send(pelicula.actors[i].print());
            console.log(i);
        }
        i++;
    }
    if (!found) {
        res.sendStatus(404);
    }
})
    .post(function (req, res) {
    var actor = req.body;
    pelicula.actors.push(new Profesional_1.Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height), actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", pelicula.actors.length));
    res.sendStatus(202);
})
    .put(function (req, res) {
    var id = Number(req.query.id);
    var found = false;
    var actor = req.body;
    var i = 0;
    while (!found && i < pelicula.actors.length) {
        found = id === pelicula.actors[i].id;
        if (found) {
            pelicula.actors[i].name = actor.name;
            pelicula.actors[i].age = Number(actor.age);
            pelicula.actors[i].genre = actor.genre;
            pelicula.actors[i].wheight = Number(actor.wheight);
            pelicula.actors[i].height = Number(actor.height);
            pelicula.actors[i].hairColor = actor.hair;
            pelicula.actors[i].eyeColor = actor.eyes;
            pelicula.actors[i].race = actor.race;
            pelicula.actors[i].isRetired = actor.retired === 'true';
            pelicula.actors[i].nationality = actor.from;
            pelicula.actors[i].oscarsNum = actor.oscars;
        }
        i++;
    }
    if (!found) {
        res.sendStatus(404);
    }
    else {
        res.sendStatus(202);
    }
})["delete"](function (req, res) {
    var id = Number(req.query.id);
    var found = false;
    var i = 0;
    while (!found && i < pelicula.actors.length) {
        found = id === pelicula.actors[i].id;
        if (found) {
            pelicula.actors.splice(i, 1);
        }
        i++;
    }
    if (!found) {
        res.sendStatus(404);
    }
    else {
        res.sendStatus(202);
    }
});
// ----------------------------------------------------------
// pelicula/director endpoint
app.route("/pelicula/director")
    .get(function (req, res) {
    res.send(pelicula.director.print());
})
    .post(function (req, res) {
    var q = req.body;
    var director = new Profesional_1.Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height), q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0);
    pelicula.director = director;
    res.sendStatus(201);
})
    .put(function (req, res) {
    var q = req.body.director;
    pelicula.director.name = q.name;
    pelicula.director.age = Number(q.age);
    pelicula.director.genre = q.genre;
    pelicula.director.wheight = Number(q.wheight);
    pelicula.director.height = Number(q.height);
    pelicula.director.hairColor = q.hair;
    pelicula.director.eyeColor = q.eyes;
    pelicula.director.race = q.race;
    pelicula.director.isRetired = q.retired === 'true';
    pelicula.director.nationality = q.from;
    pelicula.director.oscarsNum = q.oscars;
    res.sendStatus(202);
})["delete"](function (req, res) {
    pelicula.director = null;
    res.sendStatus(200);
});
// --------------------------------
// peliculas endpoint
var peliculas = [];
app.route("/peliculas")
    .get(function (req, res) {
    var id = Number(req.query.id);
    if (id !== undefined) {
        var found = false;
        var i = 0;
        while (!found && i < peliculas.length) {
            found = id === peliculas[i].id;
            if (found) {
                res.send(peliculas[i].print());
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
})
    .post(function (req, res) {
    var pelicula = null;
    var actors = [];
    var q = req.body;
    q.actors.forEach(function (actor) {
        actors.push(new Profesional_1.Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height), actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", actors.length));
    });
    var director = new Profesional_1.Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height), q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0);
    pelicula = new Movie_1.Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, q.url, 0);
    peliculas.push(pelicula);
    res.sendStatus(201);
})
    .put(function (req, res) {
    var id = Number(req.query.id);
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
        }
        i++;
    }
    if (!found) {
        res.sendStatus(404);
    }
    else {
        res.sendStatus(202);
    }
})["delete"](function (req, res) {
    var id = Number(req.query.id);
    var found = false;
    var i = 0;
    while (!found && i < peliculas.length) {
        found = id === peliculas[i].id;
        if (found) {
            peliculas.splice(i, 1);
            res.sendStatus(200);
        }
        i++;
    }
    if (!found) {
        res.sendStatus(404);
    }
});
var port = 3000;
app.listen(port, function () { return console.log("up on port:", port); });
