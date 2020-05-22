"use strict";
exports.__esModule = true;
exports.Pelicula = void 0;
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMin = edadMinima;
        this.director = director;
    }
    Pelicula.prototype.getTitulo = function () {
        return this.titulo;
    };
    Pelicula.prototype.getDuracion = function () {
        return this.duracion;
    };
    Pelicula.prototype.getEdadMin = function () {
        return this.edadMin;
    };
    Pelicula.prototype.getDirector = function () {
        return this.director;
    };
    return Pelicula;
}());
exports.Pelicula = Pelicula;
