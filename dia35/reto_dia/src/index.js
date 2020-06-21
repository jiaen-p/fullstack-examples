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
var query = "\nSELECT first_name, last_name, title\nFROM students \nLEFT JOIN marks \nON students.student_id = marks.student_id\nLEFT JOIN subject_teacher \nON marks.subject_id  = subject_teacher.subject_id\nLEFT JOIN subjects\nON subjects.subject_id = subject_teacher.subject_id\n";
query = "\nSELECT first_name, last_name, title\nFROM teachers\nLEFT JOIN subject_teacher\nON teachers.teacher_id = subject_teacher.teacher_id\nLEFT JOIN subjects\nON subjects.subject_id = subject_teacher.subject_id\n";
query = "\nSELECT COUNT(student_id) AS num_alumnos, title, first_name, last_name\nFROM marks\nJOIN subject_teacher\nON marks.subject_id = subject_teacher.subject_id\nJOIN subjects\nON subjects.subject_id = subject_teacher.subject_id\nJOIN teachers\nON subject_teacher.teacher_id = teachers.teacher_id\nGROUP BY marks.subject_id\n";
query = "\nSELECT first_name, last_name, title, AVG(mark) AS nota_media\nFROM marks\nJOIN subject_teacher\nON subject_teacher.subject_id = marks.subject_id\nJOIN subjects\nON subjects.subject_id = subject_teacher.subject_id\nRIGHT JOIN teachers\nON teachers.teacher_id = subject_teacher.teacher_id\nGROUP BY teachers.teacher_id\n";
query = "\nSELECT first_name, last_name, COUNT(subject_id) AS num_asignaturas, AVG(mark) AS nota_media, MAX(mark) AS nota_max, MIN(mark) AS nota_min\nFROM marks\nRIGHT JOIN students\nON marks.student_id = students.student_id\nGROUP BY students.student_id\n";
connection.query(query, function (err, res) {
    if (err)
        throw err;
    console.log(res);
});
