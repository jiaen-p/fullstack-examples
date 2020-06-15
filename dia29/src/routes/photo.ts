import { Router } from 'express'
import '../function/func'
import { obtain, upload, follow, deletePhoto, deleteAllPhotos } from '../function/func'

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
    follow(<string>q.from, <string>q.to, res)
})
.delete((req,res) => {
    let user:string = <string>req.query.user
    let title:string = <string>req.query.title
    title ? deletePhoto(user, title, res) : deleteAllPhotos(user, res)
})

export {router}