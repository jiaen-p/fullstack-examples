import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json())
const connection = mysql.createConnection({
    host: "localhost",
    database: "imdb",
    user: "root"
})

app.route("/pelicula/:endpoint")
.get((req,res) => {
    let endpoint = req.params.endpoint
    let table = null
    let id = req.query.idPelicula
    switch(endpoint){
        case "actor":
            table = "actor"
            break;
        case "director":
            table = "director"
            break;
        case "guionista":
            table = "guionista"
            break;
        case "productora":
            table = "productor"
            break;
        default:
            res.sendStatus(404)
    }
    if (table){
        let query = null
        let params = null
        if (table !== "productor" ){
            query = `
            SELECT profesional.nombre, apellidos, profesion, years_experiencia 
            FROM profesional
            JOIN profesionalPelicula
            ON profesionalPelicula.profesional_id = profesional.profesional_id
            WHERE profesion = ? AND pelicula_id = ?
            `
            params = [table ,id]
        } else {
            query = `SELECT * FROM productor WHERE pelicula_id = ?`
            params = [id]
        }
        connection.query(query, params, function (err,data){
            if (err) {
                res.sendStatus(500)
                console.log(err)
            } else {
                res.send(data)
            }
        })
    }
    
})
.post((req,res) => {
    let endpoint = req.params.endpoint
    let data = req.body
    let id = req.query.idPelicula
    let profesion = null
    switch(endpoint){
        case "actor":
            profesion = "actor"
            break;
        case "director":
            profesion = "director"
            break;
        case "guionista":
            profesion = "guionista"
            break;
        default:
            res.sendStatus(404)
    }
    if (profesion){
        let query = `
        INSERT INTO profesional (nombre, apellidos, profesion, years_experiencia) VALUES (?,?,?,?)`
        let params = [data.nombre, data.apellidos, profesion, data.years_experiencia]
        connection.query(query, params, function (err,data){
            if (err) {
                console.log(err)
                res.sendStatus(500)
            } else {
                query = `INSERT INTO profesionalPelicula (profesional_id, pelicula_id) VALUES (?,?)`
                params = [data.insertId, id]
                connection.query(query, params, function (err,data){
                    if (err) {
                        res.sendStatus(500)
                        console.log(err)
                    } else {
                        res.sendStatus(200)
                    }
                })
            }
        })
    }
})
.delete((req,res) => {
    let endpoint = req.params.endpoint
    let id = req.query.id
    let query = `DELETE FROM profesionalPelicula WHERE profesional_id = ?`
    let params = [id]
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

app.route("/peliculas")
.get((req,res) => {
    let query = `SELECT * FROM pelicula`
    connection.query(query, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })
})
.post((req,res) => {
    let params = [req.body.nombre, req.body.img, req.body.year_estreno]
    let query = `INSERT INTO pelicula (nombre, url, year_estreno) VALUES (?,?,?)`
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
})
.put((req,res) =>{
    let query = `UPDATE pelicula SET nombre = ?, url = ?, year_estreno = ? WHERE pelicula_id = ?`
    let params = [req.body.nombre, req.body.img, req.body.year_estreno, req.query.id]
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})
.delete((req,res) => {
    let query = `DELETE FROM pelicula WHERE pelicula_id = ?`
    let params = [req.query.id]
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})


app.route("/:endpoint")
.get((req,res) => {
    let endpoint = req.params.endpoint
    let table = null
    let id = req.query.id
    switch(endpoint){
        case "profesionales":
            table = "profesional"
            break;
        case "productoras":
            table = "productor"
            break;
        default:
            res.sendStatus(404)
    }
    if (table){
        let query = null
        let params = null
        if (id) {
            query = `SELECT * FROM ${table} WHERE ${table}_id = ?`
            params = [id]
        } else {
            query = `SELECT * FROM ${table}`
        }
        connection.query(query, params, function (err,data){
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(data)
            }
        })
    }
})
.post((req,res) => {
    let endpoint = req.params.endpoint
    let data = req.body
    let query = null
    let params = null
    switch(endpoint){
        case "profesionales":
            query = `INSERT INTO profesional (nombre, apellidos, profesion, years_experiencia) VALUES (?,?,?,?)`
            params = [data.nombre, data.apellidos, data.profesion, data.years_experiencia]
            break;
        case "productoras":
            query = `INSERT INTO productor (nombre, pelicula_id, year_creacion, pais_origen) VALUES (?,?,?,?)`
            params = [data.nombre, data.pelicula, data.year_creacion, data.pais_origen]
            break;
        default:
            res.sendStatus(404)
    }
    if (query){
        connection.query(query, params, function (err,data){
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(201)
            }
        })
    }
})
.put((req,res) => {
    let endpoint = req.params.endpoint
    let data = req.body
    let query = null
    let params = null
    switch(endpoint){
        case "profesionales":
            query = `UPDATE profesional SET nombre = ?, apellidos = ?, profesion = ?, years_experiencia = ? WHERE profesional_id = ?`
            params = [data.nombre, data.apellidos, data.profesion, data.years_experiencia, req.query.id]
            break;
        case "productoras":
            query = `UPDATE productor SET nombre = ?, pelicula_id = ?, year_creacion = ?, pais_origen = ? WHERE productor_id = ?`
            params = [data.nombre, data.pelicula, data.year_creacion, data.pais_origen, req.query.id]
            break;
        default:
            res.sendStatus(404)
    }
    if (query){
        connection.query(query, params, function (err,data){
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        })
    }
})
.delete((req,res) => {
    let endpoint = req.params.endpoint
    let data = req.body
    let query = null
    let params = null
    switch(endpoint){
        case "profesionales":
            query = `DELETE FROM profesional WHERE profesional_id = ?`
            params = [req.query.id]
            break;
        case "productoras":
            query = `DELETE FROM productor WHERE productor_id = ?`
            params = [req.query.id]
            break;
        default:
            res.sendStatus(404)
    }
    if (query){
        connection.query(query, params, function (err,data){
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        })
    }
})
const port = 3000
app.listen(port, ()=>{console.log("Listening on port", port)})