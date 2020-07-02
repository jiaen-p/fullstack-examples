import express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { Disco } from './models';

const app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended:false }), cors())

let connection = null
mongoose.connect("mongodb://localhost:27017/Angular", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.catch(err => console.error(err))



app.route("/discos")
.get((req,res) => {
    Disco.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {res.sendStatus(500); console.error(err)})
})
.post((req,res) => {
    let data = req.body
    let nuevoDisco = new Disco({"titulo": data.titulo, "interprete":data.interprete, "anyoPublicacion": data.anyoPublicacion})
    console.log(data.anyoPublicacion)
    nuevoDisco.save()
    .then(data => res.send(data))
    .catch(err => {res.sendStatus(500); console.error(err)})
})
.put((req,res) => {
    let id = req.body._id
    if(id){
        let update = {"titulo": req.body.titulo, "interprete": req.body.interprete, "anyoPublicacion":req.body.anyoPublicacion}
        Disco.findByIdAndUpdate(id, {$set: update})
        .then( data => res.send(data))
        .catch(err => {res.sendStatus(500); console.error(err)})
    } else {
        res.sendStatus(400)
    }
})
.delete((req,res) => {
    let id = req.body._id
    if(id){
        Disco.findByIdAndRemove(id)
        .then( data => res.send(data))
        .catch(err => {console.error(err); res.sendStatus(500)})
    } else {
        res.sendStatus(400)
    }
})

app.get("/discos/:id", (req,res) => {
    let id = req.params.id
    if(id){
        Disco.findById(id)
        .then(data => res.send(data))
        .catch(err => {res.sendStatus(500); console.error(err)})
    } 
})

const port = 4000

app.listen(port, () => console.log("Listening on port", port))