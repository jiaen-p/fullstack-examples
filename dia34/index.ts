import mysql from 'mysql'

const connection = mysql.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
})
let query = 'SELECT COUNT(*) AS num_total_alumnos FROM students'

query = 'SELECT * FROM groups'

query = 'DELETE FROM marks WHERE mark > 5 AND YEAR(date) = 2019'

query = 'ALTER TABLE students ADD starting_year DATE'

query = 'UPDATE students SET starting_year = 20200601 WHERE student_id BETWEEN 1 AND 12'

query = 'SELECT * FROM students WHERE YEAR(starting_year) = YEAR(CURDATE())'

query = 'SELECT COUNT(teacher_id) AS NUM_TEACHER, subject_id FROM subject_teacher GROUP BY subject_id'
// -------------------------------------------------------------------------------------------------------

query = 'SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark > 8 AND YEAR(date) = 2019'

query = 'SELECT AVG(mark) AS media, subject_id FROM marks WHERE YEAR(date) = 2019 GROUP BY subject_id'

query = 'SELECT AVG(mark) AS media, student_id FROM marks GROUP BY student_id'

query = 'INSERT INTO subjects (title) VALUES ("HTML"), ("Typescript")'

query = 'INSERT INTO teachers (first_name, last_name) VALUES ("Jose","Gomez"), ("Pedro","Banana")'

query = 'INSERT INTO subject_teacher (teacher_id, group_id) VALUES (11,5 ), (12, 6)'

query =`
SELECT students.first_name, COUNT(marks.student_id) AS asignaturas_matriculadas
FROM (( marks 
INNER JOIN subject_teacher ON marks.subject_id = subject_teacher.subject_id)
INNER JOIN students ON marks.student_id = students.student_id)
WHERE (subject_teacher.subject_id = 11 OR subject_teacher.subject_id = 12) AND (subject_teacher.teacher_id = 11 OR subject_teacher.teacher_id = 12)
GROUP BY students.student_id
`



query =`
SELECT students.first_name, COUNT(subjects.subject_id) AS asignaturas_matriculadas
FROM ((( marks 
INNER JOIN subjects ON marks.subject_id = subjects.subject_id)
INNER JOIN students ON marks.student_id = students.student_id)
INNER JOIN subject_teacher ON marks.subject_id = subject_teacher.subject_id)
WHERE subject_teacher.teacher_id IN (SELECT teacher_id FROM teachers WHERE first_name LIKE 'Pedro' OR first_name LIKE 'Jose') AND (subjects.title LIKE 'HTML' OR subjects.title LIKE 'Typescript') 
GROUP BY students.student_id
`

connection.query(query, function (err,res){
    if (err) throw err
    console.log(res)
})
