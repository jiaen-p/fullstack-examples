import { Movie } from "./Movie"
import { Professional } from "./Profesional"

const express = require('express')
const router = express.Router()
const fs = require('fs')



let pelicula: Movie = Movie.instance()
router.route("/")
.get( (req,res)=> {
    fs.readFile("./pelicula.json", "utf-8", (err, data) => {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            Object.assign(pelicula, JSON.parse(data))
            if (pelicula !== null){
                res.send(pelicula)
            } else {
                res.send("No movies")
            }
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    })
})
.post( (req,res) => {
    let actors:Professional[] = []
    let q = req.body
    q.actors.forEach(actor => {
        actors.push( new Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height),
            actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", actors.length
        ))
    });
    
    let director:Professional = new Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height),
        q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0)

    let writer: Professional = new Professional(q.writer.name, Number(q.writer.age), q.writer.genre, Number(q.writer.wheight), Number(q.writer.height),
        q.writer.hair, q.writer.eyes, q.writer.race, q.writer.retired === 'true', q.writer.from, q.writer.oscars, "Writer", 0)

    pelicula = new Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, writer, q.url, 0)
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(201)
        }
    })
})
.put( (req,res) => {
    let q = req.body
    pelicula.title = q.title
    pelicula.actors = q.actors
    pelicula.director = q.director
    pelicula.writer = q.writer
    pelicula.releaseYear = q.year
    pelicula.nationality = q.nationalitiy
    pelicula.genre = q.genre
    pelicula.url = q.url
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(202)
        }
    })
})
.delete( (req,res) => {
    pelicula = null
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(202)
        }
    })
})

// -------------

router.route("/actor")
.get( (req, res) => {
    let id = req.query.id
   
    let found:boolean = false
    let i = 0
    fs.readFile("./pelicula.json", "utf-8", (err, data) => {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            id = Number(id)
            console.log(id)
            Object.assign(pelicula, JSON.parse(data))
            
            while(!found && i < pelicula.actors.length){
                found = id === pelicula.actors[i].id
                console.log(pelicula.actors[i])
                if(found){
                    
                    // res.sendStatus(200)
                    res.send((pelicula.actors[i]))
                }
                i++
            }
            if (!found){
                res.sendStatus(404)
            }
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    })
})
.post((req,res) =>{
    let actor = req.body
    pelicula.actors.push( new Professional( actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height),
            actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", pelicula.actors.length
        )
    )
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(202)
        }
    })
})
.put((req,res) => {
    let id:number = Number(req.query.id)
    let found:boolean = false
    let actor = req.body
    let i = 0
    while(!found && i < pelicula.actors.length){
        found = id === pelicula.actors[i].id
        if (found){
            pelicula.actors[i].name = actor.name
            pelicula.actors[i].age = Number(actor.age)
            pelicula.actors[i].genre = actor.genre
            pelicula.actors[i].wheight = Number(actor.wheight)
            pelicula.actors[i].height = Number(actor.height)
            pelicula.actors[i].hairColor = actor.hair
            pelicula.actors[i].eyeColor = actor.eyes
            pelicula.actors[i].race = actor.race
            pelicula.actors[i].isRetired = actor.retired === 'true'
            pelicula.actors[i].nationality = actor.from
            pelicula.actors[i].oscarsNum = actor.oscars
        }
        i++
    }
    if(!found){
        res.sendStatus(404)
    } else {
        fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
            if(err){
                console.log(err)
                res.sendStatus(500)
            } else {
                console.log("writen succesfully")
                res.sendStatus(202)
            }
        })
    }
})
.delete((req,res) => {
    let id:number = Number(req.query.id)
    let found:boolean = false
    let i = 0
    while (!found && i < pelicula.actors.length){
        found = id === pelicula.actors[i].id
        if(found){
            pelicula.actors.splice(i,1)
            fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
                if(err){
                    console.log(err)
                    res.sendStatus(500)
                } else {
                    console.log("writen succesfully")
                    res.sendStatus(202)
                }
            })
        }
        i++
    }
    if(!found){
        res.sendStatus(404)
    } else {
        res.sendStatus(202)
    }
})
// ----------------------------------------------------------
// director endpoint

router.route("/director")
.get((req,res) => {
    fs.readFile("./pelicula.json", "utf-8", (err, data) => {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            Object.assign(pelicula,JSON.parse(data))
            res.send(pelicula.director)
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    })
})
.post((req,res) => {
    let q = req.body
    let director:Professional = new Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height),
        q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0)

    pelicula.director = director

    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(201)
        }
    })
})
.put((req,res) => {
    let q = req.body.director
    pelicula.director.name = q.name
    pelicula.director.age = Number (q.age)
    pelicula.director.genre = q.genre
    pelicula.director.wheight = Number (q.wheight)
    pelicula.director.height = Number (q.height)
    pelicula.director.hairColor = q.hair
    pelicula.director.eyeColor = q.eyes
    pelicula.director.race = q.race
    pelicula.director.isRetired = q.retired === 'true'
    pelicula.director.nationality = q.from
    pelicula.director.oscarsNum = q.oscars
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(202)
        }
    })
})
.delete((req,res) => {
    pelicula.director = null
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(200)
        }
    })
})

// ----------------------------------------------------------
// writer endpoint
router.route("/director")
.get((req,res) => {
    fs.readFile("./pelicula.json", "utf-8", (err, data) => {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            Object.assign(pelicula,JSON.parse(data))
            res.send(pelicula.writer)
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    })
})
.post((req,res) => {
    let q = req.body
    let writer: Professional = new Professional(q.writer.name, Number(q.writer.age), q.writer.genre, Number(q.writer.wheight), Number(q.writer.height),
    q.writer.hair, q.writer.eyes, q.writer.race, q.writer.retired === 'true', q.writer.from, q.writer.oscars, "Writer", 0)

    pelicula.writer = writer
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(201)
        }
    })
})
.put((req,res) => {
    let q = req.body.writer
    pelicula.writer.name = q.name
    pelicula.writer.age = Number (q.age)
    pelicula.writer.genre = q.genre
    pelicula.writer.wheight = Number (q.wheight)
    pelicula.writer.height = Number (q.height)
    pelicula.writer.hairColor = q.hair
    pelicula.writer.eyeColor = q.eyes
    pelicula.writer.race = q.race
    pelicula.writer.isRetired = q.retired === 'true'
    pelicula.writer.nationality = q.from
    pelicula.writer.oscarsNum = q.oscars
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(202)
        }
    })
})
.delete((req,res) => {
    pelicula.writer = null
    fs.writeFile("./pelicula.json", JSON.stringify(pelicula), "utf-8" , err => {
        if(err){
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("writen succesfully")
            res.sendStatus(200)
        }
    })
})

module.exports = router