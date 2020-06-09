var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ---------------------------------------------------
// profesionales endpoint
var apiProfesionales = require('./apiRestProfesionales');
app.use("/profesionales", apiProfesionales);
// ---------------------------------------------------
// pelicula endpoint
var apiPelicula = require('./apiRestPelicula');
app.use("/pelicula", apiPelicula);
// ---------------------------------------------------
// peliculas endpoint
var apiPeliculas = require('./apiRestPeliculas');
app.use("/peliculas", apiPeliculas);
var port = 3000;
app.listen(port, function () { return console.log("up on port:", port); });
