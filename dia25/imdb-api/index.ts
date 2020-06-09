const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// ---------------------------------------------------
// profesionales endpoint
const apiProfesionales = require('./apiRestProfesionales')
app.use("/profesionales", apiProfesionales)

// ---------------------------------------------------
// pelicula endpoint
const apiPelicula = require('./apiRestPelicula')
app.use("/pelicula", apiPelicula)

// ---------------------------------------------------
// peliculas endpoint
const apiPeliculas = require('./apiRestPeliculas')
app.use("/peliculas", apiPeliculas)


const port = 3000
app.listen(port, () => console.log("up on port:", port))