import { Router } from 'express'
import '../function/func'
import { createUser, getUser } from '../function/func'
const router = Router()

router.route("/")
.get((req,res) =>{
    getUser(res)
})
.post((req,res) => {
    createUser(req.body, res)
})

export{router}