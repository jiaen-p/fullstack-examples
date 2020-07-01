"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mysql_1 = __importDefault(require("mysql"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: false }), body_parser_1.default.json());
var connection = mysql_1.default.createConnection({
    host: "localhost",
    database: "imdb",
    user: "root"
});
app.route("/pelicula/:endpoint")
    .get(function (req, res) {
    var endpoint = req.params.endpoint;
    var table = null;
    var id = req.query.idPelicula;
    switch (endpoint) {
        case "actor":
            table = "actor";
            break;
        case "director":
            table = "director";
            break;
        case "guionista":
            table = "guionista";
            break;
        case "productora":
            table = "productor";
            break;
        default:
            res.sendStatus(404);
    }
    if (table) {
        var query = null;
        var params = null;
        if (table !== "productor") {
            query = "\n            SELECT profesional.nombre, apellidos, profesion, years_experiencia \n            FROM profesional\n            JOIN profesionalPelicula\n            ON profesionalPelicula.profesional_id = profesional.profesional_id\n            WHERE profesion = ? AND pelicula_id = ?\n            ";
            params = [table, id];
        }
        else {
            query = "SELECT * FROM productor WHERE pelicula_id = ?";
            params = [id];
        }
        connection.query(query, params, function (err, data) {
            if (err) {
                res.sendStatus(500);
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
    }
})
    .post(function (req, res) {
    var endpoint = req.params.endpoint;
    var data = req.body;
    var id = req.query.idPelicula;
    var profesion = null;
    switch (endpoint) {
        case "actor":
            profesion = "actor";
            break;
        case "director":
            profesion = "director";
            break;
        case "guionista":
            profesion = "guionista";
            break;
        default:
            res.sendStatus(404);
    }
    if (profesion) {
        var query_1 = "\n        INSERT INTO profesional (nombre, apellidos, profesion, years_experiencia) VALUES (?,?,?,?)";
        var params_1 = [data.nombre, data.apellidos, profesion, data.years_experiencia];
        connection.query(query_1, params_1, function (err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                query_1 = "INSERT INTO profesionalPelicula (profesional_id, pelicula_id) VALUES (?,?)";
                params_1 = [data.insertId, id];
                connection.query(query_1, params_1, function (err, data) {
                    if (err) {
                        res.sendStatus(500);
                        console.log(err);
                    }
                    else {
                        res.sendStatus(200);
                    }
                });
            }
        });
    }
})
    .delete(function (req, res) {
    var endpoint = req.params.endpoint;
    var id = req.query.id;
    var query = "DELETE FROM profesionalPelicula WHERE profesional_id = ?";
    var params = [id];
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
});
app.route("/peliculas")
    .get(function (req, res) {
    var query = "SELECT * FROM pelicula";
    connection.query(query, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.send(data);
        }
    });
})
    .post(function (req, res) {
    var params = [req.body.nombre, req.body.img, req.body.year_estreno];
    var query = "INSERT INTO pelicula (nombre, url, year_estreno) VALUES (?,?,?)";
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(201);
        }
    });
})
    .put(function (req, res) {
    var query = "UPDATE pelicula SET nombre = ?, url = ?, year_estreno = ? WHERE pelicula_id = ?";
    var params = [req.body.nombre, req.body.img, req.body.year_estreno, req.query.id];
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
})
    .delete(function (req, res) {
    var query = "DELETE FROM pelicula WHERE pelicula_id = ?";
    var params = [req.query.id];
    connection.query(query, params, function (err, data) {
        if (err) {
            res.sendStatus(500);
        }
        else {
            res.sendStatus(200);
        }
    });
});
app.route("/:endpoint")
    .get(function (req, res) {
    var endpoint = req.params.endpoint;
    var table = null;
    var id = req.query.id;
    switch (endpoint) {
        case "profesionales":
            table = "profesional";
            break;
        case "productoras":
            table = "productor";
            break;
        default:
            res.sendStatus(404);
    }
    if (table) {
        var query = null;
        var params = null;
        if (id) {
            query = "SELECT * FROM " + table + " WHERE " + table + "_id = ?";
            params = [id];
        }
        else {
            query = "SELECT * FROM " + table;
        }
        connection.query(query, params, function (err, data) {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.send(data);
            }
        });
    }
})
    .post(function (req, res) {
    var endpoint = req.params.endpoint;
    var data = req.body;
    var query = null;
    var params = null;
    switch (endpoint) {
        case "profesionales":
            query = "INSERT INTO profesional (nombre, apellidos, profesion, years_experiencia) VALUES (?,?,?,?)";
            params = [data.nombre, data.apellidos, data.profesion, data.years_experiencia];
            break;
        case "productoras":
            query = "INSERT INTO productor (nombre, pelicula_id, year_creacion, pais_origen) VALUES (?,?,?,?)";
            params = [data.nombre, data.pelicula, data.year_creacion, data.pais_origen];
            break;
        default:
            res.sendStatus(404);
    }
    if (query) {
        connection.query(query, params, function (err, data) {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(201);
            }
        });
    }
})
    .put(function (req, res) {
    var endpoint = req.params.endpoint;
    var data = req.body;
    var query = null;
    var params = null;
    switch (endpoint) {
        case "profesionales":
            query = "UPDATE profesional SET nombre = ?, apellidos = ?, profesion = ?, years_experiencia = ? WHERE profesional_id = ?";
            params = [data.nombre, data.apellidos, data.profesion, data.years_experiencia, req.query.id];
            break;
        case "productoras":
            query = "UPDATE productor SET nombre = ?, pelicula_id = ?, year_creacion = ?, pais_origen = ? WHERE productor_id = ?";
            params = [data.nombre, data.pelicula, data.year_creacion, data.pais_origen, req.query.id];
            break;
        default:
            res.sendStatus(404);
    }
    if (query) {
        connection.query(query, params, function (err, data) {
            if (err) {
                res.sendStatus(500);
            }
            else {
                res.sendStatus(200);
            }
        });
    }
})
    .delete(function (req, res) {
    var endpoint = req.params.endpoint;
    var data = req.body;
    var query = null;
    var params = null;
    switch (endpoint) {
        case "profesionales":
            query = "DELETE FROM profesional WHERE profesional_id = ?";
            params = [req.query.id];
            break;
        case "productoras":
            query = "DELETE FROM productor WHERE productor_id = ?";
            params = [req.query.id];
            break;
        default:
            res.sendStatus(404);
    }
    if (query) {
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
