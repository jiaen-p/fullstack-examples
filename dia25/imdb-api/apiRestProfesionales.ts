import { Professional } from "./Profesional"

const express = require('express')
const router = express.Router()
const fs = require('fs')

let profesionales: Professional[] = []


router.route("/")
.get((req,res) => {
    let id = req.query.id
    fs.readFile("./profesionales.json", "utf-8", (err, data) => {
        if (!err && JSON.parse(data) !== null && JSON.parse(data) !== undefined) {
            id = Number(id)
            Object.assign(profesionales, JSON.parse(data))
            if (id !== undefined && id < profesionales.length){
                let found:boolean = false
                let i:number = 0
                while ( !found && i < profesionales.length){
                    found = (id === profesionales[i].id)
                    if (found){
                        res.send(profesionales[i])
                    }
                    i++
                }
            } else if (id >= profesionales.length){
                res.sendStatus(400)
            } else {
                res.send(profesionales)
            }
        } else {
            console.log(err)
            res.sendStatus(500)
        }
    })
})
.post((req,res) => {
    let p = req.body
    let retired:boolean = (p.isRetired === 'true')
    profesionales.push(new Professional(p.name, Number(p.age), p.genre, Number(p.wheight), Number(p.height), 
        p.hairColor, p.eyeColor, p.race, retired, p.nationality, Number(p.oscarsNum), p.profession, profesionales.length
    ))
    console.log(profesionales)
    fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8" , err => {
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
    let id:number = Number(req.query.id)
    let pro: Professional = null
    let found:boolean = false
    let i:number = 0
    while ( !found && i < profesionales.length){
        found = (id === profesionales[i].id)
        if (found){
            pro = profesionales[i]
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
            profesionales[i] = pro
        }
        i++
    }
    fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8" , err => {
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
    let id = req.query.id 
    if(id !== undefined){
        profesionales.splice(id,1)
        fs.writeFile("./profesionales.json", JSON.stringify(profesionales), "utf-8" , err => {
            if(err){
                console.log(err)
                res.sendStatus(500)
            } else {
                console.log("writen succesfully")
                res.sendStatus(202)
            }
        })
    } else {
        res.sendStatus(400)
    }
    
})



module.exports = router;