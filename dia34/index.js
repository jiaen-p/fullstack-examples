"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
});
var query = 'SELECT COUNT(*) AS num_total_alumnos FROM students';
query = 'SELECT * FROM groups';
query = 'DELETE FROM marks WHERE mark > 5 AND YEAR(date) = 2019';
query = 'ALTER TABLE students ADD starting_year DATE';
query = 'UPDATE students SET starting_year = 20200601 WHERE student_id BETWEEN 1 AND 12';
query = 'SELECT * FROM students WHERE YEAR(starting_year) = YEAR(CURDATE())';
query = 'SELECT COUNT(teacher_id) AS NUM_TEACHER, subject_id FROM subject_teacher GROUP BY subject_id';
// -------------------------------------------------------------------------------------------------------
query = 'SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark > 8 AND YEAR(date) = 2019';
query = 'SELECT AVG(mark) AS media, subject_id FROM marks WHERE YEAR(date) = 2019 GROUP BY subject_id';
query = 'SELECT AVG(mark) AS media, student_id FROM marks GROUP BY student_id';
query = 'INSERT INTO subjects (title) VALUES ("HTML"), ("Typescript")';
query = 'INSERT INTO teachers (first_name, last_name) VALUES ("Jose","Gomez"), ("Pedro","Banana")';
query = 'INSERT INTO subject_teacher (teacher_id, group_id) VALUES (11,5 ), (12, 6)';
query = "\nSELECT students.first_name, COUNT(marks.student_id) AS asignaturas_matriculadas\nFROM (( marks \nINNER JOIN subject_teacher ON marks.subject_id = subject_teacher.subject_id)\nINNER JOIN students ON marks.student_id = students.student_id)\nWHERE (subject_teacher.subject_id = 11 OR subject_teacher.subject_id = 12) AND (subject_teacher.teacher_id = 11 OR subject_teacher.teacher_id = 12)\nGROUP BY students.student_id\n";
query = "\nSELECT students.first_name, COUNT(subjects.subject_id) AS asignaturas_matriculadas\nFROM ((( marks \nINNER JOIN subjects ON marks.subject_id = subjects.subject_id)\nINNER JOIN students ON marks.student_id = students.student_id)\nINNER JOIN subject_teacher ON marks.subject_id = subject_teacher.subject_id)\nWHERE subject_teacher.teacher_id IN (SELECT teacher_id FROM teachers WHERE first_name LIKE 'Pedro' OR first_name LIKE 'Jose') AND (subjects.title LIKE 'HTML' OR subjects.title LIKE 'Typescript') \nGROUP BY students.student_id\n";
connection.query(query, function (err, res) {
    if (err)
        throw err;
    console.log(res);
});
