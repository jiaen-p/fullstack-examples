"use strict";
exports.__esModule = true;
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, temporadas, prestado, genero, creador) {
        if (temporadas === void 0) { temporadas = 3; }
        if (prestado === void 0) { prestado = false; }
        this.titulo = titulo;
        this.temporadas = temporadas;
        this.prestado = prestado;
        this.genero = genero;
        this.creador = creador;
    }
    Serie.prototype.toString = function () {
        return ("\n        Titulo: " + this.titulo + "\n        Numero de temporadas: " + this.temporadas + "\n        Genero: " + this.genero + "\n        Creador: " + this.creador + "\n        Prestado: " + this.prestado + "\n        ");
    };
    Serie.prototype.entregar = function () {
        this.prestado = true;
    };
    Serie.prototype.devolver = function () {
        this.prestado = false;
    };
    Serie.prototype.isEntregado = function () {
        return this.prestado;
    };
    Serie.prototype.compareTo = function (obj) {
        return obj.getTemporadas() - this.temporadas;
    };
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.setTitulo = function (value) {
        this.titulo = value;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.setTemporadas = function (value) {
        this.temporadas = value;
    };
    Serie.prototype.getGenero = function () {
        return this.genero;
    };
    Serie.prototype.setGenero = function (value) {
        this.genero = value;
    };
    Serie.prototype.getCreador = function () {
        return this.creador;
    };
    Serie.prototype.setCreador = function (value) {
        this.creador = value;
    };
    return Serie;
}());
exports.Serie = Serie;
