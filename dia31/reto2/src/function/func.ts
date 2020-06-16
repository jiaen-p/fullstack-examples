import { Photo } from "../models/Photos";
import { User } from '../models/User'

export function upload(user:string, url:string, title:string, description:string, res){
    let photo = new Photo({
        titulo: title,
        url: url,
        user: user,
        description: description 
    })
    photo.save()
    .then(data => {
        res.send(data)
        addPhotoUser(data)
    })
    .catch(err => {console.log(err)})
}
export function obtain(user:string, res){
    Photo.find({_id: user}, (err,data) =>{
        err ? res.send(err) : res.send(data)
    })
}
export function follow(from:string, to:string, res){
    let update ={"follow": to}
    if (to){
        User.updateOne({_id: from}, {$addToSet: update}, {new: true})
        .then(()=> {res.sendStatus(200)})
        .catch(err => res.send(err))
    } else {
        res.sendStatus(400)
    }
}
export function unfollow (from: string, to: string, res){
    let update = {"follow": to}
    User.findByIdAndUpdate(from, {$pull: update})
    .then(d => {res.sendStatus(200); console.log(d)})
    .catch(err => {res.sendStatus(500); console.log(err)})
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
            res.sendStatus(201)
        } else {
            console.log(err)
            res.send(err)
        }
    })
}
export function getUser(res){
    User.find({})
    .then(data => res.send(data))
    .catch(err => console.error(err))
}
export function addPhotoUser(data){
    let newPhoto = {"photos": data._id}
    User.findByIdAndUpdate(data.user, {$addToSet: newPhoto}, (err, res) => {
        if (err){
            console.error(err)
        }
    })

}

export function timeline(user:string,res){
    User.findById(user)
    .populate('follow')
    .exec()
    .then(data => {
        let following = []
        data.toJSON().follow.forEach(u => {
            following.push(u._id)
        });
        User.find({_id: following}, {Password: 0})
        .populate('photos')
        .exec((err, data) => {
            if (err) throw err
            res.send(data)
        })
    })
}