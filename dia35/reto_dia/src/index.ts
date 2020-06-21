import mysql from 'mysql'
const connection = mysql.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
})
let query = `
SELECT first_name, last_name, title
FROM students 
LEFT JOIN marks 
ON students.student_id = marks.student_id
LEFT JOIN subject_teacher 
ON marks.subject_id  = subject_teacher.subject_id
LEFT JOIN subjects
ON subjects.subject_id = subject_teacher.subject_id
`

query = `
SELECT first_name, last_name, title
FROM teachers
LEFT JOIN subject_teacher
ON teachers.teacher_id = subject_teacher.teacher_id
LEFT JOIN subjects
ON subjects.subject_id = subject_teacher.subject_id
`

query = `
SELECT COUNT(student_id) AS num_alumnos, title, first_name, last_name
FROM marks
JOIN subject_teacher
ON marks.subject_id = subject_teacher.subject_id
JOIN subjects
ON subjects.subject_id = subject_teacher.subject_id
JOIN teachers
ON subject_teacher.teacher_id = teachers.teacher_id
GROUP BY marks.subject_id
`

query = `
SELECT first_name, last_name, title, AVG(mark) AS nota_media
FROM marks
JOIN subject_teacher
ON subject_teacher.subject_id = marks.subject_id
JOIN subjects
ON subjects.subject_id = subject_teacher.subject_id
RIGHT JOIN teachers
ON teachers.teacher_id = subject_teacher.teacher_id
GROUP BY teachers.teacher_id
`

query = `
SELECT first_name, last_name, COUNT(subject_id) AS num_asignaturas, AVG(mark) AS nota_media, MAX(mark) AS nota_max, MIN(mark) AS nota_min
FROM marks
RIGHT JOIN students
ON marks.student_id = students.student_id
GROUP BY students.student_id
`
connection.query(query, function (err,res){
    if (err) throw err
    console.log(res)
})