import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
})
let query = `
    CREATE TABLE teachers(
        teacher_id int,
        first_name varchar(60),
        last_name varchar(60),
        PRIMARY KEY(teacher_id)
    )
    CREATE TABLE subject_teacher(
        subject_id int,
        teacher_id int,
        group_id int,
        PRIMARY KEY (subject_id),
        FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)
        FOREIGN KEY (group_id) REFERENCES groups(group_id)
    )
`

// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = ''
for (let i = 0; i < 5; i++){
    query += `
    INSERT INTO teachers (teacher_id, first_name, last_name) 
    VALUES (NULL, 'profesor ${i}', '')
    `
}
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })


query = 'INSERT INTO students (student_id, first_name, last_name, group_id) VALUES\n '
for (let i = 0; i< 9; i++){
    query += `(NULL, 'first name ${i}', 'lastname ${i}', '${Math.floor(Math.random()*10 + 1)}'),`
}
query += `(NULL, 'first name ${9}', 'lastname ${9}', '${Math.floor(Math.random()*10 + 1)}')`
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
    
query = `INSERT INTO marks (mark_id ,student_id, subject_id, date, mark) VALUES
(Null, 29, 3, "2019-06-30", 1),
(Null, 30, 2, "2008-05-23", 2),
(Null, 31, 2, "2018-05-23", 3),
(Null, 32, 2, "2007-05-23", 4),
(Null, 33, 2, "2015-05-23", 4),
(Null, 34, 2, "2014-05-23",6),
(Null, 35, 2, "2013-05-23", 7),
(Null, 36, 2, "2018-05-23",8),
(Null, 37, 2, "2009-05-23",1),
(Null, 38, 2, "2004-05-23", 0)
`

// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })


query = `
UPDATE marks SET mark = 0
`

// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = `SELECT * FROM teachers`
query = `SELECT * FROM teachers`
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = `DELETE FROM marks WHERE YEAR(CURDATE()) - YEAR(marks.date) > 10`
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = `UPDATE marks
SET marks.mark = 5 
WHERE marks.subject_id IN(
    SELECT subject_teacher.subject_id 
    FROM marks, subject_teacher 
    WHERE marks.subject_id = subject_teacher.subject_id AND subject_teacher.teacher_id = 1)`


// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = `SELECT COUNT(mark_id) FROM marks`

// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })

query = `
SELECT students.first_name, subjects.title
FROM subject_teacher
INNER JOIN students
ON  subject_teacher.group_id = students.group_id 
INNER JOIN subjects
ON subject_teacher.subject_id = subjects.subject_id
`

// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })