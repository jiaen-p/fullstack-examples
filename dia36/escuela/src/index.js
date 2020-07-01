"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mysql_1 = __importDefault(require("mysql"));
var post_1 = require("./functions/post");
var put_1 = require("./functions/put");
var connection = mysql_1.default.createConnection({
    host: "localhost",
    database: "Codenotch",
    user: "root"
});
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get("/media", function (req, res) {
    var id = req.query.id;
    var query = "SELECT AVG(mark) as media FROM marks WHERE student_id = ?";
    var params = [id];
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(data);
        }
    });
});
app.get("/apuntadas", function (req, res) {
    var id = req.query.id;
    var query = null;
    var params = null;
    if (id) {
        query = "SELECT title FROM subjects\n        JOIN marks\n        ON subjects.subject_id = marks.subject_id\n        WHERE marks.student_id = ?";
        params = [id];
    }
    else {
        query = "SELECT first_name, last_name, title FROM marks\n        JOIN students \n        ON students.student_id = marks.student_id\n        JOIN subjects\n        ON subjects.subject_id = marks.subject_id\n        ORDER BY title ASC\n        ";
    }
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(data);
        }
    });
});
app.get("/impartidas", function (req, res) {
    var id = req.query.id;
    var query = null;
    var params = null;
    if (id) {
        query = "SELECT title FROM subjects \n        JOIN subject_teacher\n        ON subjects.subject_id = subject_teacher.subject_id\n        WHERE teacher_id = ?";
        params = [id];
    }
    else {
        query = "SELECT title AS asignatura, first_name, last_name \n        FROM teachers\n        JOIN subject_teacher\n        ON subject_teacher.teacher_id = teachers.teacher_id\n        JOIN subjects\n        ON subjects.subject_id = subject_teacher.subject_id\n        ORDER BY title ASC\n        ";
    }
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(data);
        }
    });
});
app.route("/:endpoint")
    .get(function (req, res) {
    var endpoint = req.params.endpoint;
    var table = null;
    var id = req.query.id;
    switch (endpoint) {
        case "alumnos":
            table = "student";
            break;
        case "profesores":
            table = "teacher";
            break;
        case "grupos":
            table = "group";
            break;
        case "asignaturas":
            table = "subject";
            break;
        case "notas":
            table = "mark";
            break;
        default:
            res.sendStatus(404);
    }
    if (table) {
        var query = null;
        var params = null;
        if (id) {
            query = "SELECT * FROM " + table + "s WHERE " + table + "_id = ?";
            params = [id];
        }
        else {
            query = "SELECT * FROM " + table + "s";
        }
        connection.query(query, params, function (err, data) {
            if (err)
                throw err;
            res.send(data);
        });
    }
})
    .post(function (req, res) {
    var endpoint = req.params.endpoint;
    switch (endpoint) {
        case "alumnos":
            post_1.nuevoAlumno(req.body, res, connection);
            break;
        case "profesores":
            post_1.nuevoProfesor(req.body, res, connection);
            break;
        case "grupos":
            post_1.nuevoGrupo(req.body, res, connection);
            break;
        case "asignaturas":
            post_1.nuevaAsignatura(req.body, res, connection);
            break;
        case "notas":
            post_1.nuevaNota(req.body, res, connection);
            break;
        default:
            res.sendStatus(404);
    }
})
    .put(function (req, res) {
    var endpoint = req.params.endpoint;
    var id = req.query.id;
    switch (endpoint) {
        case "alumnos":
            put_1.modificarAlumno(id, req.body, res, connection);
            break;
        case "profesores":
            put_1.modificarProfesor(id, req.body, res, connection);
            break;
        case "grupos":
            put_1.modificarGrupo(id, req.body, res, connection);
            break;
        case "asignaturas":
            put_1.modificarAsignatura(id, req.body, res, connection);
            break;
        case "notas":
            put_1.modificarNota(id, req.body, res, connection);
            break;
        default:
            res.sendStatus(404);
    }
})
    .delete(function (req, res) {
    var endpoint = req.params.endpoint;
    var table = null;
    var id = req.query.id;
    switch (endpoint) {
        case "alumnos":
            table = "student";
            break;
        case "profesores":
            table = "teacher";
            break;
        case "grupos":
            table = "group";
            break;
        case "asignaturas":
            table = "subject";
            break;
        case "notas":
            table = "mark";
            break;
        default:
            res.sendStatus(404);
    }
    if (table) {
        var query = "DELETE " + table + "s WHERE " + table + "_id = ?";
        var params = [id];
        connection.query(query, params, function (err, data) {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(200);
            }
        });
    }
});
var port = 3000;
app.listen(port, function () { console.log("Listening on port", port); });
