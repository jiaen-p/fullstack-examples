import { Router } from 'express'
import { Profesional } from '../models/Profesionales'
export const router = Router()
router.route("/")
.get((req,res) => {
    let id = req.query.id
    if(id){
        Profesional.findById(id, (err,data) => {
            if(!err){
                res.send(data)
            } else {
                res.send(err)
            }
        })
    } else {
        Profesional.find({}, (err,data) => {
            if(!err){
                res.send(data)
            } else {
                res.send(err)
            }
        })
    }
})
.post((req,res) => {
    let q = req.body
    let pro = new Profesional({
        name: q.name,
        age: q.age,
        gender: q.gender,
        weight: q.weight,
        height: q.height,
        nationality: q.nationality,
        isRetired: q.isRetired,
        profesion: q.profesion,
        hairColor: q.hairColor,
        eyeColor: q.eyeColor,
        race: q.race,
        oscarNum: q.oscarNum
    })
    pro.save()
    .then((saved)=>{res.send(saved)})
    .catch(err => {res.send(err)})
})
.put((req,res) => {
    let id = req.query.id
    let q = req.body
    let pro = {
        name: q.name,
        age: q.age,
        gender: q.gender,
        weight: q.weight,
        height: q.height,
        nationality: q.nationality,
        isRetired: q.isRetired,
        profesion: q.profesion,
        hairColor: q.hairColor,
        eyeColor: q.eyeColor,
        race: q.race,
        oscarNum: q.oscarNum
    }
    Profesional.updateOne({_id:id}, pro, (err,data) =>{
        if(data){
            res.send(data)
        } else {
            res.send(err)
        }
    })
})
.delete((req,res) => {
    let id = req.query.id
    Profesional.findByIdAndDelete(id,(err,data) => {
        if(err){
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})
