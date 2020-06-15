import { Router } from 'express'
import { timeline } from '../function/func'

const router = Router()

router.route("/")
.get((req,res) => {
    let id = req.query.id
    timeline(<string>id, res)
})

export {router}