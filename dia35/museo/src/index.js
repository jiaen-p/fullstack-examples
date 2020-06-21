"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var connection = mysql_1.default.createConnection({
    host: "localhost",
    database: "Museo",
    user: "root"
});
var query = "\nSELECT dueno.nombre, dueno.apellidos, dueno.email, tipo_mueble, mueble_id, fecha_final\nFROM inventario\nJOIN en_museo\nON inventario.en_museo = en_museo.id\nJOIN localizacion\nON localizacion.localizacion_id = en_museo.localizacion_id\nJOIN pretado_de\nON en_museo.prestado_de_id = pretado_de.id\nJOIN pieza \nON pieza.inventario_id = inventario.inventario_id\nJOIN dueno\nON pieza.dueno_id = dueno.dueno_id\nJOIN autor\nON pieza.autor_id = autor.autor_id\nGROUP BY pieza.pieza_id\n";
query = "\nSELECT coleccion, COUNT(coleccion) as num_item, COUNT(prestado_de_id) as num_prestado\nFROM en_museo\nGROUP BY coleccion\nORDER BY num_item DESC\n";
connection.query(query, function (err, res) {
    if (err)
        throw err;
    console.log(res);
});
