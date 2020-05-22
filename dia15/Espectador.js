"use strict";
exports.__esModule = true;
exports.Espectador = void 0;
var Espectador = /** @class */ (function () {
    function Espectador(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    Espectador.prototype.getNombre = function () {
        return this.nombre;
    };
    Espectador.prototype.getEdad = function () {
        return this.edad;
    };
    Espectador.prototype.getDinero = function () {
        return this.dinero;
    };
    Espectador.prototype.setAsiento = function (asiento) {
        this.asiento = asiento;
    };
    Espectador.prototype.getAsiento = function () {
        return this.asiento;
    };
    return Espectador;
}());
exports.Espectador = Espectador;
