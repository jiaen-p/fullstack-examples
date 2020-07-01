import express from 'express'
import bodyParser from 'body-parser'

import mysql from 'mysql'
import { nuevoAlumno, nuevoProfesor, nuevoGrupo, nuevaAsignatura, nuevaNota } from './functions/post'
import { modificarAlumno, modificarProfesor, modificarGrupo, modificarAsignatura, modificarNota } from './functions/put'

const connection = mysql.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
})

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/media", (req,res) => {
    let id = req.query.id
    let query = `SELECT AVG(mark) as media FROM marks WHERE student_id = ?`
    let params = [id]
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })
})
app.get("/apuntadas",(req,res) => {
    let id = req.query.id
    let query = null
    let params = null
    if (id){
        query = `SELECT title FROM subjects
        JOIN marks
        ON subjects.subject_id = marks.subject_id
        WHERE marks.student_id = ?`
        params = [id]
    } else {
        query = `SELECT first_name, last_name, title FROM marks
        JOIN students 
        ON students.student_id = marks.student_id
        JOIN subjects
        ON subjects.subject_id = marks.subject_id
        ORDER BY title ASC
        `
    }
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })
})
app.get("/impartidas", (req,res) => {
    let id = req.query.id
    let query = null
    let params = null
    if (id){
        query = `SELECT title FROM subjects 
        JOIN subject_teacher
        ON subjects.subject_id = subject_teacher.subject_id
        WHERE teacher_id = ?`
        params = [id]
    } else {
        query = `SELECT title AS asignatura, first_name, last_name 
        FROM teachers
        JOIN subject_teacher
        ON subject_teacher.teacher_id = teachers.teacher_id
        JOIN subjects
        ON subjects.subject_id = subject_teacher.subject_id
        ORDER BY title ASC
        `
    }
    connection.query(query, params, function (err,data){
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })
})


app.route("/:endpoint")
.get((req,res)=>{
    let endpoint = req.params.endpoint
    let table = null
    let id = req.query.id
    switch(endpoint){
        case "alumnos":
            table = "student"
            break;
        case "profesores":
            table = "teacher"
            break;
        case "grupos":
            table = "group"
            break;
        case "asignaturas":
            table = "subject"
            break;
        case "notas":
            table = "mark"
            break;
        default:
            res.sendStatus(404)
    }
    if(table){
        let query = null
        let params = null
        if (id) {
            query = `SELECT * FROM ${table}s WHERE ${table}_id = ?`
            params = [id]
        } else {
            query = `SELECT * FROM ${table}s`
        }
        connection.query(query, params, function (err,data){
            if (err) throw err
            res.send(data)
        })
    }
})
.post((req,res) => {
    let endpoint = req.params.endpoint
    switch(endpoint){
        case "alumnos":
            nuevoAlumno(req.body, res, connection)
            break;
        case "profesores":
            nuevoProfesor(req.body, res, connection)
            break;
        case "grupos":
            nuevoGrupo(req.body, res, connection)
            break;
        case "asignaturas":
            nuevaAsignatura(req.body, res, connection)
            break;
        case "notas":
            nuevaNota(req.body, res, connection)
            break;
        default:
            res.sendStatus(404)
    }
})
.put((req,res) => {
    let endpoint = req.params.endpoint
    let id = req.query.id
    switch(endpoint){
        case "alumnos":
            modificarAlumno(id,req.body,res,connection)
            break;
        case "profesores":
            modificarProfesor(id,req.body,res,connection)
            break;
        case "grupos":
            modificarGrupo(id, req.body, res, connection)
            break;
        case "asignaturas":
            modificarAsignatura(id, req.body, res, connection)
            break;
        case "notas":
            modificarNota(id, req.body, res, connection)
            break;
        default:
            res.sendStatus(404)
    }
})
.delete((req,res) => {
    let endpoint = req.params.endpoint
    let table = null
    let id = req.query.id
    switch(endpoint){
        case "alumnos":
            table = "student"
            break;
        case "profesores":
            table = "teacher"
            break;
        case "grupos":
            table = "group"
            break;
        case "asignaturas":
            table = "subject"
            break;
        case "notas":
            table = "mark"
            break;
        default:
            res.sendStatus(404)
    }
    if(table){
        let query = `DELETE ${table}s WHERE ${table}_id = ?`
        let params = [id]
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