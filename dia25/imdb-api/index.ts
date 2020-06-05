const express = require('express')
const bodyParser = require('body-parser')

import { Professional } from './Profesional'
import { Movie } from './Movie'

const app = express()

let pro: Professional = null

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/profesional", (req,res) => {
    res.send(pro)
})
app.post("/professional", (req,res) => {
    let p = req.body
    let retired:boolean = (p.isRetired === 'true')
    pro = new Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), 
        p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, 0
    )
    res.send(pro.print())
})

app.put("/profesional", (req,res) => {
    let p = req.body
    pro.name = p.name
    pro.age = Number(p.age)
    pro.genre = p.genre
    pro.wheight = Number(p.wheight)
    pro.height = Number(p.height)
    pro.hairColor = p.hairColor
    pro.eyeColor = p.eyeColor
    pro.race = p.race
    pro.isRetired = (p.isRetired === 'true')
    pro.nationality = p.nationalitiy
    pro.oscarsNum = Number(p.oscarsNum)
    pro.profession = p.profession

    res.send(pro.print())
})
app.delete("/profesional", (req,res) => {
    pro = null
    res.send(pro)
})

// ---------------------------------------------------
// profesional endpoint
let profesionales: Professional[] = []

app.get("/profesionales", (req,res) => {
    let id = req.query.id
    if (id !== undefined && id < profesionales.length){
        let found:boolean = false
        let i:number = 0
        while ( !found && i < profesionales.length){
            found = (id === profesionales[i].id)
            if (found){
                res.send(profesionales[i].print())
            }
            i++
        }
    } else if (id >= profesionales.length){
        res.sendStatus(400)
    } else {
        res.send(profesionales)
    }
})
app.post("/profesionales", (req,res) => {
    let p = req.body
    let retired:boolean = (p.isRetired === 'true')
    profesionales.push(new Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), 
        p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, profesionales.length
    ))
    res.sendStatus(201)
})
app.put("/profesionales", (req,res) => {
    let id:number = Number(req.query.id)
    let pro: Professional = null
    let found:boolean = false
    let i:number = 0
    while ( !found && i < profesionales.length){
        found = (id === profesionales[i].id)
        if (found){
            pro = profesionales[i]
        }
        i++
    }
    let p = req.body
    pro.name = p.name
    pro.age = Number(p.age)
    pro.genre = p.genre
    pro.wheight = Number(p.wheight)
    pro.height = Number(p.height)
    pro.hairColor = p.hairColor
    pro.eyeColor = p.eyeColor
    pro.race = p.race
    pro.isRetired = (p.isRetired === 'true')
    pro.nationality = p.nationalitiy
    pro.oscarsNum = Number(p.oscarsNum)
    pro.profession = p.profession
    res.sendStatus(202)
})
app.delete("/profesionales", (req,res) => {
    let id = req.query.id 
    if(id !== undefined){
        profesionales.splice(id,1)
        res.sendStatus(202)
    } else {
        res.sendStatus(400)
    }
    
})
// ---------------------------------------------------------
// pelicula endpoint
let pelicula: Movie = null
app.route("/pelicula")
.get( (req,res)=> {
    if (pelicula !== null){
        res.send(pelicula.print())
    } else {
        res.send("No movies")
    }
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
    pelicula = new Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, q.url, 0)
    res.sendStatus(201)
})
.put( (req,res) => {
    let q = req.body
    pelicula.title = q.title
    pelicula.actors = q.actors
    pelicula.director = q.director
    pelicula.releaseYear = q.year
    pelicula.nationality = q.nationalitiy
    pelicula.genre = q.genre
    pelicula.url = q.url
    res.sendStatus(202)
})
.delete( (req,res) => {
    pelicula = null
    res.sendStatus(202)
})

// -------------

app.route("/pelicula/actor")
.get( (req, res) => {
    let id:number = Number(req.query.id)
    
    let found:boolean = false
    let i = 0
    while(!found && i < pelicula.actors.length){
        found = id === pelicula.actors[i].id
        
        if(found){
            res.send(pelicula.actors[i].print())
            console.log(i)
        }
        i++
    }
    if (!found){
        res.sendStatus(404)
    }
})
.post((req,res) =>{
    let actor = req.body
    pelicula.actors.push( new Professional( actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height),
            actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", pelicula.actors.length
        )
    )
    res.sendStatus(202)
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
        res.sendStatus(202)
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
// pelicula/director endpoint

app.route("/pelicula/director")
.get((req,res) => {
    res.send(pelicula.director.print())
})
.post((req,res) => {
    let q = req.body
    let director:Professional = new Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height),
        q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0)
    pelicula.director = director
    res.sendStatus(201)
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
    res.sendStatus(202)
})
.delete((req,res) => {
    pelicula.director = null
    res.sendStatus(200)
})

// --------------------------------
// peliculas endpoint
let peliculas: Movie[] = []
app.route("/peliculas")
.get((req,res)=> {
    let id:number = Number(req.query.id)
    if(id !== undefined){
        let found:boolean = false
        let i = 0
        while(!found && i < peliculas.length){
            found = id === peliculas[i].id
            if(found){
                res.send(peliculas[i].print())
            }
            i++
        }
        if(!found){
            res.sendStatus(404)
        }
    } else {
        res.send(peliculas)
    }
})
.post((req,res) => {
    let pelicula: Movie = null
    let actors:Professional[] = []
    let q = req.body
    q.actors.forEach(actor => {
        actors.push( new Professional(actor.name, Number(actor.age), actor.genre, Number(actor.wheight), Number(actor.height),
            actor.hair, actor.eyes, actor.race, actor.retired === 'true', actor.from, actor.oscars, "actor", actors.length
        ))
    });
    
    let director:Professional = new Professional(q.director.name, Number(q.director.age), q.director.genre, Number(q.director.wheight), Number(q.director.height),
        q.director.hair, q.director.eyes, q.director.race, q.director.retired === 'true', q.director.from, q.director.oscars, "Director", 0)
    pelicula = new Movie(q.title, actors, Number(q.year), q.nationality, q.genre, director, q.url, 0)
    peliculas.push(pelicula)
    res.sendStatus(201)
})
.put((req,res) => {
    let id:number = Number(req.query.id)
    let found:boolean = false
    let i = 0
    while(!found && i < peliculas.length){
        found = id === peliculas[i].id
        if (found){
            let actor = req.body.actors[i]
            for(let j = 0; j < peliculas[i].actors.length; j++){
                peliculas[i].actors[j].name = actor.name
                peliculas[i].actors[j].age = Number(actor.age)
                peliculas[i].actors[j].genre = actor.genre
                peliculas[i].actors[j].wheight = Number(actor.wheight)
                peliculas[i].actors[j].height = Number(actor.height)
                peliculas[i].actors[j].hairColor = actor.hair
                peliculas[i].actors[j].eyeColor = actor.eyes
                peliculas[i].actors[j].race = actor.race
                peliculas[i].actors[j].isRetired = actor.retired === 'true'
                peliculas[i].actors[j].nationality = actor.from
                peliculas[i].actors[j].oscarsNum = actor.oscars
            }
            let q = req.body.director
            peliculas[i].director.name = q.name
            peliculas[i].director.age = Number (q.age)
            peliculas[i].director.genre = q.genre
            peliculas[i].director.wheight = Number (q.wheight)
            peliculas[i].director.height = Number (q.height)
            peliculas[i].director.hairColor = q.hair
            peliculas[i].director.eyeColor = q.eyes
            peliculas[i].director.race = q.race
            peliculas[i].director.isRetired = q.retired === 'true'
            peliculas[i].director.nationality = q.from
            peliculas[i].director.oscarsNum = q.oscars
        }
        i++
    }
    if(!found){
        res.sendStatus(404)
    } else {
        res.sendStatus(202)
    }
})
.delete((req,res) => {
    let id = Number(req.query.id)
    let found:boolean = false
    let i = 0
    while (!found && i < peliculas.length){
        found = id === peliculas[i].id
        if(found){
            peliculas.splice(i,1)
            res.sendStatus(200)
        }
        i++
    }
    if(!found){
        res.sendStatus(404)
    }
})









const port = 3000
app.listen(port, () => console.log("up on port:", port))