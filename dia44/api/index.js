"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mysql_1 = __importDefault(require("mysql"));
var app = express_1.default();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), cors_1.default());
var connection = mysql_1.default.createConnection({
    host: "localhost",
    database: "Angular",
    user: "root"
});
app.route("/discos")
    .get(function (req, res) {
    var query = "SELECT * FROM discos";
    connection.query(query, function (err, data) {
        if (err)
            throw res.sendStatus(500);
        res.send(data);
    });
})
    .post(function (req, res) {
    var query = "INSERT INTO discos(titulo, interprete, anyoPublicacion) VALUES(?,?,?)";
    var data = req.body;
    connection.query(query, [data.titulo, data.interprete, data.anyoPublicacion], function (err, data) {
        if (err)
            throw res.sendStatus(500);
        res.send(data);
    });
})
    .put(function (req, res) {
    var query = "UPDATE discos SET titulo=?, interprete=?, anyoPublicacion=? WHERE id = ?";
    var data = req.body;
    connection.query(query, [data.titulo, data.interprete, data.anyoPublicacion, data.id], function (err, data) {
        if (err)
            throw res.sendStatus(500);
        res.send(data);
    });
})
    .delete(function (req, res) {
    var query = "DELETE FROM discos WHERE id = ?";
    connection.query(query, [req.body.id], function (err, data) {
        if (err)
            throw res.sendStatus(500);
        res.send(data);
    });
});
app.get("/discos/:id", function (req, res) {
    var id = req.params.id;
    if (id) {
        var query = "SELECT * FROM discos WHERE id=?";
        connection.query(query, [id], function (err, data) {
            if (err)
                throw res.sendStatus(500);
            res.send(data);
        });
    }
});
var port = 4000;
app.listen(port, function () { return console.log("Listening on port", port); });
