"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var Profesionales_1 = require("../models/Profesionales");
exports.router = express_1.Router();
exports.router.route("/")
    .get(function (req, res) {
    var id = req.query.id;
    if (id) {
        Profesionales_1.Profesional.findById(id, function (err, data) {
            if (!err) {
                res.send(data);
            }
            else {
                res.send(err);
            }
        });
    }
    else {
        Profesionales_1.Profesional.find({}, function (err, data) {
            if (!err) {
                res.send(data);
            }
            else {
                res.send(err);
            }
        });
    }
})
    .post(function (req, res) {
    var q = req.body;
    var pro = new Profesionales_1.Profesional({
        name: q.name,
        age: q.age,
        gender: q.gender,
        weight: q.weight,
        height: q.height,
        nationality: q.nationality,
        isRetired: q.isRetired,
        profesion: q.profesion,
        hairColor: q.hairColor,
        eyeColor: q.eyeColor,
        race: q.race,
        oscarNum: q.oscarNum
    });
    pro.save()
        .then(function (saved) { res.send(saved); })
        .catch(function (err) { res.send(err); });
})
    .put(function (req, res) {
    var id = req.query.id;
    var q = req.body;
    var pro = {
        name: q.name,
        age: q.age,
        gender: q.gender,
        weight: q.weight,
        height: q.height,
        nationality: q.nationality,
        isRetired: q.isRetired,
        profesion: q.profesion,
        hairColor: q.hairColor,
        eyeColor: q.eyeColor,
        race: q.race,
        oscarNum: q.oscarNum
    };
    Profesionales_1.Profesional.updateOne({ _id: id }, pro, function (err, data) {
        if (data) {
            res.send(data);
        }
        else {
            res.send(err);
        }
    });
})
    .delete(function (req, res) {
    var id = req.query.id;
    Profesionales_1.Profesional.findByIdAndDelete(id, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
});
