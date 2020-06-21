import mysql from 'mysql'
const connection = mysql.createConnection({
    host: "localhost",
    database: "Museo",
    user: "root"
})


let query = `
SELECT dueno.nombre, dueno.apellidos, dueno.email, tipo_mueble, mueble_id, fecha_final
FROM inventario
JOIN en_museo
ON inventario.en_museo = en_museo.id
JOIN localizacion
ON localizacion.localizacion_id = en_museo.localizacion_id
JOIN pretado_de
ON en_museo.prestado_de_id = pretado_de.id
JOIN pieza 
ON pieza.inventario_id = inventario.inventario_id
JOIN dueno
ON pieza.dueno_id = dueno.dueno_id
JOIN autor
ON pieza.autor_id = autor.autor_id
GROUP BY pieza.pieza_id
`

query = `
SELECT coleccion, COUNT(coleccion) as num_item, COUNT(prestado_de_id) as num_prestado
FROM en_museo
GROUP BY coleccion
ORDER BY num_item DESC
`
connection.query(query, function (err,res){
    if (err) throw err
    console.log(res)
})