import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
})
// let query = `
// CREATE TABLE notas(
//     Id int NOT NULL,
//     Alumno varchar(120) NOT NULL,
//     Nota int NOT NULL,
//     Asignatura varchar(120) NOT NULL
// )
// `
// let query = `
// ALTER TABLE notas
// ADD PRIMARY KEY (Id)
// `
// 
// let query = `
// ALTER TABLE notas
// ADD UNIQUE (Id)
// `

// let query = `
// ALTER TABLE notas
// ADD NotaMedia varchar(2)
// `

// let query = `
// ALTER TABLE notas
// MODIFY COLUMN NotaMedia int
// `

// let query = `
// ALTER TABLE notas
// DROP COLUMN NotaMedia
// `

let query = `
DROP TABLE notas
`
connection.query(query, function (err,res){
    if (err) throw err
    console.log(res)
})