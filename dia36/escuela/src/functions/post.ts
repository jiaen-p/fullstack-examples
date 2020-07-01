export function nuevoAlumno(datos, res, connection){
    let query = `INSERT INTO students ( first_name, last_name, group_id, starting_year) VALUES (?,?,?,?)`
    let params = [datos.nombre, datos.apellidos, String(datos.grupo), datos.inicio]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
}

export function nuevoProfesor(datos, res, connection){
    let query = `INSERT INTO teachers (first_name, last_name) VALUES (?,?)`
    let params = [datos.nombre, datos.apellidos]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
}
export function nuevoGrupo(datos, res, connection){
    let query = `INSERT INTO groups (name) VALUES (?)`
    let params = [datos.grupo]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
}

export function nuevaAsignatura(datos, res, connection){
    let query = `INSERT INTO subjects (title) VALUES (?)`
    let params = [datos.asignatura]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
}
export function nuevaNota(datos, res, connection){
    let query = `INSERT INTO marks (student_id, subject_id, date, mark) VALUES (?,?,?,?)`
    let params = [datos.alumno, datos.asignatura, datos.fecha, datos.nota]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(201)
        }
    })
}