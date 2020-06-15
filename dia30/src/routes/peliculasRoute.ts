import { Router } from "express";
import { Pelicula } from "../models/Peliculas";
import { Profesional } from "../models/Profesionales";

export const router = Router()

router.route("/")
.get((req,res)=>{
    let id = req.query.id 
    let search = {}
    id ? search = {_id:id} : null
    Pelicula.find(search,(err,data)=>{
        if(!err){
            res.send(data)
        } else{
            console.log(err)
            res.send(err)
        }
    })
})
.post((req,res) => {
    let q = req.body
    let peli = new Pelicula({
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
    })
    peli.save()
    .then((saved) => {
        res.send(saved)
    })
    .catch(err => res.send(err))
})
.put((req,res) =>{
    let q = req.body
    let id = req.query.id
    if (id){
        let peli = {
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
        }
        Pelicula.findOneAndUpdate({_id:id}, peli, (err,data) => {
            if(!err){
                res.send(data)
            } else {
                res.send(err)
            }
        })
    } else {
        res.sendStatus(400)
    }
})
.delete((req,res) => {
    let id = req.query.id
    Pelicula.findByIdAndDelete(id)
    .then(()=>{
        res.sendStatus(200)
    })
    .catch(err => {
        res.send(err)
    })
})

router.route("/:pro")
.get((req,res) => {
    let id = req.query.idPelicula || req.query.id
    let p = req.params.pro
    p === 'guionista' ? p = 'writer' : null
    let option = {}
    option[p+'s'] = 1
    option["_id"] = 0
    Pelicula.find({_id:id}, option, (err, data) =>{
        if(!err && data){
            let profesionales = data[0][p + 's']
            let query = { "name": profesionales, "profesion": p}
            Profesional.find(query)
            .then( (data) => {
                    err ? res.sendStatus(500) : res.send(data) 
                    if(err){console.error(err)}
            })
            .catch(err => console.error(err))
        } else {
            console.error(err)
        }
    })

})
.post((req,res) => {
    let id = req.query.idPelicula || req.query.id
    let p = req.params.pro
    p === 'guionista' ? p = 'writer' : null
    let q = req.body
    if(q.name){
        let pro = {
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
        }
        let query = {}
        query["name"] = q.name
        query["profesion"] = p
        Profesional.findOneAndUpdate(query, pro, {upsert:true, new:true})
        .catch(err => console.error(err))
        let update ={}
        update[p + 's'] = q.name
        Pelicula.findByIdAndUpdate(id, {$addToSet: update}, {new: true})
        .then(r => {
            res.send(r)
        })
        .catch(err => {
            console.error(err)
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(400)
    }
})
.delete((req,res) => {
    let id = req.query.idPelicula || req.query.id
    let p = req.params.pro
    let name = req.query.name
    p === 'guionista' ? p = 'writer' : null
    let del = {}
    del[p +'s']=name
    Pelicula.updateOne({_id:id}, {$pull: del }, {new:true}, (err,data) => {
        if(!err){
            res.send(data)
        } else {
            res.sendStatus(500)
            console.error(err)
        }
    })
})