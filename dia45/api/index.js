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
var mongoose_1 = __importDefault(require("mongoose"));
var models_1 = require("./models");
var app = express_1.default();
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), cors_1.default());
var connection = null;
mongoose_1.default.connect("mongodb://localhost:27017/Angular", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .catch(function (err) { return console.error(err); });
app.route("/discos")
    .get(function (req, res) {
    models_1.Disco.find()
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) { res.sendStatus(500); console.error(err); });
})
    .post(function (req, res) {
    var data = req.body;
    var nuevoDisco = new models_1.Disco({ "titulo": data.titulo, "interprete": data.interprete, "anyoPublicacion": data.anyoPublicacion });
    console.log(data.anyoPublicacion);
    nuevoDisco.save()
        .then(function (data) { return res.send(data); })
        .catch(function (err) { res.sendStatus(500); console.error(err); });
})
    .put(function (req, res) {
    var id = req.body._id;
    if (id) {
        var update = { "titulo": req.body.titulo, "interprete": req.body.interprete, "anyoPublicacion": req.body.anyoPublicacion };
        models_1.Disco.findByIdAndUpdate(id, { $set: update })
            .then(function (data) { return res.send(data); })
            .catch(function (err) { res.sendStatus(500); console.error(err); });
    }
    else {
        res.sendStatus(400);
    }
})
    .delete(function (req, res) {
    var id = req.body._id;
    if (id) {
        models_1.Disco.findByIdAndRemove(id)
            .then(function (data) { return res.send(data); })
            .catch(function (err) { console.error(err); res.sendStatus(500); });
    }
    else {
        res.sendStatus(400);
    }
});
app.get("/discos/:id", function (req, res) {
    var id = req.params.id;
    if (id) {
        models_1.Disco.findById(id)
            .then(function (data) { return res.send(data); })
            .catch(function (err) { res.sendStatus(500); console.error(err); });
    }
});
var port = 4000;
app.listen(port, function () { return console.log("Listening on port", port); });
