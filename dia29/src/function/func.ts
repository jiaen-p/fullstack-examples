import { Photo } from "../models/Photos";
import { User } from '../models/User'

export function upload(user:string, url:string, title:string, description:string, res){
    let photo = new Photo({
        titulo: title,
        url: url,
        nombre: user,
        description: description 
    })
    photo.save()
    .then(data => {
        res.send(data)
    })
    .catch(err => {console.log(err)})
}
export function obtain(user:string, res){
    Photo.find({nombre: user}, (err,data) =>{
        err ? res.send(err) : res.send(data)
    })
}
export function follow(from:string, to:string, res){
    User.update({name: from}, {$addToSet: {follow: to}})
    .then(()=> {res.sendStatus(200)})
    .catch(err => res.send(err))
}
export function deletePhoto(user:string, title: string, res){
    Photo.findOneAndDelete({nombre:user, titulo: title})
    .then(r => res.sendStatus(200))
    .catch(err => {console.log(err); res.sendStatus(500)})
}
export function deleteAllPhotos(user:string, res){
    Photo.deleteMany({nombre:user})
    .then(r => res.sendStatus(200))
    .catch(err => {console.log(err); res.sendStatus(500)})
}
// -------------------------------------------------------------------------

export function createUser(b, res){
    let user = new User({
        login: b.login,
        Password: b.password,
        name: b.name,
        surname: b.surname,
        dateOfBirth: new Date( Date.UTC(b.year, b.month, b.day)),
        comments: b.comments,
        rol: b.rol,
        address: b.address,
        phone: b.phone,
        email: b.email,
        follow: []
    })
    user.save((err) =>{
        if(!err){
            console.log("saved")
            res.sendStatus(201)
        } else {
            console.log(err)
            res.send(err)
        }
    })
}
