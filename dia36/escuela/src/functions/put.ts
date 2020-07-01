export function modificarAlumno(id, datos, res, connection){
    let query = `UPDATE students SET first_name = ?, last_name = ?, group_id = ?, starting_year = ? WHERE student_id = ?`
    let params = [datos.nombre, datos.apellidos, String(datos.grupo), datos.inicio, id]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
export function modificarProfesor(id, datos, res, connection){
    let query = `UPDATE teachers SET first_name = ?, last_name = ? WHERE teacher_id = ?`
    let params = [datos.nombre, datos.apellidos, id]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
export function modificarGrupo(id, datos, res, connection){
    let query = `UPDATE groups SET name = ? WHERE group_id = ?`
    let params = [datos.grupo, id]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
export function modificarAsignatura(id, datos, res, connection){
    let query = `UPDATE subjects SET title = ? WHERE subject_id = ?`
    let params = [datos.asignatura, id]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
export function modificarNota(id, datos, res, connection){
    let query = `UPDATE marks SET mark = ? WHERE mark_id = ?`
    let params = [datos.nota, id]
    connection.query(query, params, function (err,data){
        if (err) {
            console.error(err)
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}
