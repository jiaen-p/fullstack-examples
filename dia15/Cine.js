"use strict";
exports.__esModule = true;
exports.Cine = void 0;
var columna;
(function (columna) {
    columna["A"] = "A";
    columna["B"] = "B";
    columna["C"] = "C";
    columna["D"] = "D";
    columna["E"] = "E";
    columna["F"] = "F";
    columna["G"] = "G";
    columna["H"] = "H";
    columna["I"] = "I";
})(columna || (columna = {}));
var Cine = /** @class */ (function () {
    function Cine(pelicula, precio) {
        if (precio === void 0) { precio = 10; }
        this.asientosOcupados = [];
        this.pelicula = pelicula;
        this.precio = precio;
    }
    Cine.prototype.getPelicula = function () {
        return this.pelicula;
    };
    Cine.prototype.getPrecio = function () {
        return this.precio;
    };
    Cine.prototype.comprobarAsiento = function () {
        var ocupado = false;
        var asientoAsignado;
        var chars = 'ABCDEFGHI';
        while (!ocupado) {
            var c = chars[Math.floor(Math.random() * 9)];
            var f = Math.floor(Math.random() * 8 + 1);
            asientoAsignado = [c, f];
            ocupado = !this.incluye(asientoAsignado);
        }
        this.asientosOcupados.push(asientoAsignado);
        return asientoAsignado;
    };
    Cine.prototype.comprarEntrada = function (espectador) {
        var res = '';
        if (this.asientosOcupados.length === 72) {
            res = 'No hay mas asientos disponibles';
        }
        else if (espectador.getDinero() >= this.precio && espectador.getEdad() >= this.pelicula.getEdadMin()) {
            var asientoAsignado = this.comprobarAsiento();
            res = asientoAsignado + ' Es tu asiento';
        }
        else {
            res = 'No tiene suficiente dinero/edad para esta peli';
        }
        espectador.setAsiento(res);
    };
    Cine.prototype.incluye = function (asiento) {
        var ocupado = false;
        var i = 0;
        while (!ocupado && i < this.asientosOcupados.length) {
            ocupado = this.asientosOcupados[i][0] === asiento[0] && this.asientosOcupados[i][1] === asiento[1];
            i++;
        }
        return ocupado;
    };
    return Cine;
}());
exports.Cine = Cine;
