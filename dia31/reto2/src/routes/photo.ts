import { Router } from 'express'
import { obtain, upload, follow, unfollow, deletePhoto, deleteAllPhotos } from '../function/func'

const router = Router()

router.route("/")
.get((req,res) => {
    let user:string = <string>req.query.user
    obtain(user,res)
})
.post((req,res) => {
    let q = req.body
    upload(q.user, q.url, q.title, q.description, res)
})
.put((req,res) => {
    let q = req.query
    let un = req.query.unfollow === 'true'
    if(!un){
        follow(<string>q.from, <string>q.to, res)
    } else {
        unfollow(<string>q.from, <string>q.to, res)
    }
})
.delete((req,res) => {
    let user:string = <string>req.query.user
    let title:string = <string>req.query.title
    title ? deletePhoto(user, title, res) : deleteAllPhotos(user, res)
})

export {router}