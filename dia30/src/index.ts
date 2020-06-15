import express from 'express'
import mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import {router as profesionalRoute} from './routes/profesionalesRoute'
import {router as peliculaRoute} from'./routes/peliculasRoute'
const app = express()

mongoose.connect("mongodb://localhost:27017/codenotch", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.catch(err => console.error(err))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/profesionales", profesionalRoute)
app.use("/peliculas", peliculaRoute)

const port = 4000
app.listen(port, ()=>{console.log("Listening on port:", port)})