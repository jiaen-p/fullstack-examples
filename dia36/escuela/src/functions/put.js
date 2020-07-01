"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modificarNota = exports.modificarAsignatura = exports.modificarGrupo = exports.modificarProfesor = exports.modificarAlumno = void 0;
function modificarAlumno(id, datos, res, connection) {
    var query = "UPDATE students SET first_name = ?, last_name = ?, group_id = ?, starting_year = ? WHERE student_id = ?";
    var params = [datos.nombre, datos.apellidos, String(datos.grupo), datos.inicio, id];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
}
exports.modificarAlumno = modificarAlumno;
function modificarProfesor(id, datos, res, connection) {
    var query = "UPDATE teachers SET first_name = ?, last_name = ? WHERE teacher_id = ?";
    var params = [datos.nombre, datos.apellidos, id];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
}
exports.modificarProfesor = modificarProfesor;
function modificarGrupo(id, datos, res, connection) {
    var query = "UPDATE groups SET name = ? WHERE group_id = ?";
    var params = [datos.grupo, id];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
}
exports.modificarGrupo = modificarGrupo;
function modificarAsignatura(id, datos, res, connection) {
    var query = "UPDATE subjects SET title = ? WHERE subject_id = ?";
    var params = [datos.asignatura, id];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
}
exports.modificarAsignatura = modificarAsignatura;
function modificarNota(id, datos, res, connection) {
    var query = "UPDATE marks SET mark = ? WHERE mark_id = ?";
    var params = [datos.nota, id];
    connection.query(query, params, function (err, data) {
        if (err) {
            console.error(err);
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
}
exports.modificarNota = modificarNota;
