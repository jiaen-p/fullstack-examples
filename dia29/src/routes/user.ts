import { Router } from 'express'
import '../function/func'
import { createUser } from '../function/func'
const router = Router()

router.route("/")
.get((req,res) =>{

})
.post((req,res) => {
    createUser(req.body, res)
})

export{router}