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
var query = "\n    CREATE TABLE teachers(\n        teacher_id int,\n        first_name varchar(60),\n        last_name varchar(60),\n        PRIMARY KEY(teacher_id)\n    )\n    CREATE TABLE subject_teacher(\n        subject_id int,\n        teacher_id int,\n        group_id int,\n        PRIMARY KEY (subject_id),\n        FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id)\n        FOREIGN KEY (group_id) REFERENCES groups(group_id)\n    )\n";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = '';
for (var i = 0; i < 5; i++) {
    query += "\n    INSERT INTO teachers (teacher_id, first_name, last_name) \n    VALUES (NULL, 'profesor " + i + "', '')\n    ";
}
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = 'INSERT INTO students (student_id, first_name, last_name, group_id) VALUES\n ';
for (var i = 0; i < 9; i++) {
    query += "(NULL, 'first name " + i + "', 'lastname " + i + "', '" + Math.floor(Math.random() * 10 + 1) + "'),";
}
query += "(NULL, 'first name " + 9 + "', 'lastname " + 9 + "', '" + Math.floor(Math.random() * 10 + 1) + "')";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "INSERT INTO marks (mark_id ,student_id, subject_id, date, mark) VALUES\n(Null, 29, 3, \"2019-06-30\", 1),\n(Null, 30, 2, \"2008-05-23\", 2),\n(Null, 31, 2, \"2018-05-23\", 3),\n(Null, 32, 2, \"2007-05-23\", 4),\n(Null, 33, 2, \"2015-05-23\", 4),\n(Null, 34, 2, \"2014-05-23\",6),\n(Null, 35, 2, \"2013-05-23\", 7),\n(Null, 36, 2, \"2018-05-23\",8),\n(Null, 37, 2, \"2009-05-23\",1),\n(Null, 38, 2, \"2004-05-23\", 0)\n";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "\nUPDATE marks SET mark = 0\n";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "SELECT * FROM teachers";
query = "SELECT * FROM teachers";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "DELETE FROM marks WHERE YEAR(CURDATE()) - YEAR(marks.date) > 10";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "UPDATE marks\nSET marks.mark = 5 \nWHERE marks.subject_id IN(\n    SELECT subject_teacher.subject_id \n    FROM marks, subject_teacher \n    WHERE marks.subject_id = subject_teacher.subject_id AND subject_teacher.teacher_id = 1)";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "SELECT COUNT(mark_id) FROM marks";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
query = "\nSELECT students.first_name, subjects.title\nFROM subject_teacher\nINNER JOIN students\nON  subject_teacher.group_id = students.group_id \nINNER JOIN subjects\nON subject_teacher.subject_id = subjects.subject_id\n";
// connection.query(query, function (err,res){
//     if (err) throw err
//     console.log(res)
// })
