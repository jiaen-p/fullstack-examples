import express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import mysql from 'mysql'

const app = express();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended:false }), cors())

const connection = mysql.createConnection({
    host: "localhost",
    database: "Angular",
    user: "root"
})


app.route("/discos")
.get((req,res) => {
    let query = `SELECT * FROM discos`
    connection.query(query, function (err,data){
        if (err) throw res.sendStatus(500)
        res.send(data)
    })
})
.post((req,res) => {
    let query = `INSERT INTO discos(titulo, interprete, anyoPublicacion) VALUES(?,?,?)`
    let data = req.body
    connection.query(query,[data.titulo, data.interprete, data.anyoPublicacion], function (err,data){
        if (err) throw res.sendStatus(500)
        res.send(data)
    })
})
.put((req,res) => {
    let query = `UPDATE discos SET titulo=?, interprete=?, anyoPublicacion=? WHERE id = ?`
    let data = req.body
    connection.query(query,[data.titulo, data.interprete, data.anyoPublicacion, data.id], function (err,data){
        if (err) throw res.sendStatus(500)
        res.send(data)
    })
})
.delete((req,res) => {
    let query = `DELETE FROM discos WHERE id = ?`
    connection.query(query,[req.body.id], function (err,data){
        if (err) throw res.sendStatus(500)
        res.send(data)
    })
})

app.get("/discos/:id", (req,res) => {
    let id = req.params.id
    if(id){
        let query = `SELECT * FROM discos WHERE id=?`
        connection.query(query,[id], function (err,data){
            if (err) throw res.sendStatus(500)
            res.send(data)
        })
    } 
})

const port = 4000

app.listen(port, () => console.log("Listening on port", port))