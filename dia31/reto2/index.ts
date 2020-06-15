import express from 'express'
import * as bodyParser from 'body-parser'
import {router as photoroute} from './src/routes/photo'
import {router as userroute} from './src/routes/user'
import {router as timelineroute} from './src/routes/timeline'
import mongoose  from 'mongoose'
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/codenotch", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.catch(err => console.log(err))

app.use("/photos", photoroute )
app.use("/users", userroute)
app.use("/timeline", timelineroute)

const port = 3000
app.listen(port, ()=> {console.log("Listening on port", port)})