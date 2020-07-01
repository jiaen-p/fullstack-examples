"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuevaNota = exports.nuevaAsignatura = exports.nuevoGrupo = exports.nuevoProfesor = exports.nuevoAlumno = void 0;
function nuevoAlumno(datos, res, connection) {
    var query = "INSERT INTO students ( first_name, last_name, group_id, starting_year) VALUES (?,?,?,?)";
    var params = [datos.nombre, datos.apellidos, String(datos.grupo), datos.inicio];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
}
exports.nuevoAlumno = nuevoAlumno;
function nuevoProfesor(datos, res, connection) {
    var query = "INSERT INTO teachers (first_name, last_name) VALUES (?,?)";
    var params = [datos.nombre, datos.apellidos];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
}
exports.nuevoProfesor = nuevoProfesor;
function nuevoGrupo(datos, res, connection) {
    var query = "INSERT INTO groups (name) VALUES (?)";
    var params = [datos.grupo];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
}
exports.nuevoGrupo = nuevoGrupo;
function nuevaAsignatura(datos, res, connection) {
    var query = "INSERT INTO subjects (title) VALUES (?)";
    var params = [datos.asignatura];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
}
exports.nuevaAsignatura = nuevaAsignatura;
function nuevaNota(datos, res, connection) {
    var query = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (?,?,?,?)";
    var params = [datos.alumno, datos.asignatura, datos.fecha, datos.nota];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
}
exports.nuevaNota = nuevaNota;
