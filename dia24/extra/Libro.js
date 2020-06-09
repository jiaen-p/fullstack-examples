"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, horas, prestado, genero, editorial) {
        if (horas === void 0) { horas = 40; }
        if (prestado === void 0) { prestado = false; }
        this.titulo = titulo,
            this.autor = autor,
            this.horas = horas,
            this.genero = genero,
            this.editorial = editorial,
            this.prestado = prestado;
    }
    Libro.prototype.toString = function () {
        return ("\n        Titulo: " + this.titulo + "\n        Autor: " + this.autor + "\n        Horas estimadas: " + this.horas + "\n        Genero: " + this.genero + "\n        Editorial: " + this.editorial + "\n        Prestado: " + this.prestado + "\n        ");
    };
    Libro.prototype.entregar = function () {
        this.prestado = true;
    };
    Libro.prototype.devolver = function () {
        this.prestado = false;
    };
    Libro.prototype.isEntregado = function () {
        return this.prestado;
    };
    Libro.prototype.compareTo = function (obj) {
        return obj.getHoras() - this.horas;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getHoras = function () {
        return this.horas;
    };
    Libro.prototype.setHoras = function (horas) {
        this.horas = horas;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    return Libro;
}());
exports.Libro = Libro;
