const express = require('express')
const bodyParser = require('body-parser')

import { Professional } from './Profesional'

const app = express()

let pro: Professional = null

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/professional", (req,res) => {
    let p = req.body
    let retired:boolean = (p.isRetired === 'true')
    pro = new Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), 
        p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession
    )
    res.send(pro.print())
})
app.get("/professional", (req,res) => {
    res.send(pro)
})

app.put("/professional", (req,res) => {
    let p = req.body
    pro.name = p.name
    pro.age = Number(p.age)
    pro.genre = p.genre
    pro.wheight = Number(p.wheight)
    pro.height = Number(p.height)
    pro.hairColor = p.hairColor
    pro.eyeColor = p.eyeColor
    
    res.send(pro.print())
})
app.delete("/professional", (req,res) => {
    pro = null
    res.send(pro)
})


const port = 3000
app.listen(port, () => console.log("up on port:", port))