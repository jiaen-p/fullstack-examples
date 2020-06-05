"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var Profesional_1 = require("./Profesional");
var app = express();
var pro;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/professional", function (req, res) {
    var p = req.body;
    var retired = (p.isRetired === 'true');
    pro = new Profesional_1.Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession);
    res.send(pro.print());
});
app.get("/professional", function (req, res) {
    res.send(pro);
});
app.put("/professional", function (req, res) {
    pro.name = req.body.name;
    pro.age = req.body.age;
    res.send(pro.print());
});
app["delete"]("/professional", function (req, res) {
    pro = undefined;
    res.send(pro);
});
var port = 3000;
app.listen(port, function () { return console.log("up on port:", port); });
