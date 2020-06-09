"use strict";
exports.__esModule = true;
var Profesional_1 = require("./Profesional");
var express = require('express');
var router = express.Router();
var fs = require('fs');
var profesionales = [];
router.route("/")
    .get(function (req, res) {
    var id = req.query.id;
    fs.readFile("./profesionales.json", "utf-8", function (err, data) {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            id = Number(id);
            Object.assign(profesionales, JSON.parse(data));
            if (id !== undefined && id < profesionales.length) {
                var found = false;
                var i = 0;
                while (!found && i < profesionales.length) {
                    found = (id === profesionales[i].id);
                    if (found) {
                        res.send(profesionales[i]);
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
        }
        else {
            console.log(err);
            res.sendStatus(500);
        }
    });
})
    .post(function (req, res) {
    var p = req.body;
    var retired = (p.isRetired === 'true');
    profesionales.push(new Profesional_1.Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, profesionales.length));
    console.log(profesionales);
    fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8", function (err) {
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
    var id = Number(req.query.id);
    var pro = null;
    var found = false;
    var i = 0;
    while (!found && i < profesionales.length) {
        found = (id === profesionales[i].id);
        if (found) {
            pro = profesionales[i];
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
            profesionales[i] = pro;
        }
        i++;
    }
    fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8", function (err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else {
            console.log("writen succesfully");
            res.sendStatus(202);
        }
    });
})["delete"](function (req, res) {
    var id = req.query.id;
    if (id !== undefined) {
        profesionales.splice(id, 1);
        fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8", function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("writen succesfully");
                res.sendStatus(202);
            }
        });
    }
    else {
        res.sendStatus(400);
    }
});
module.exports = router;
