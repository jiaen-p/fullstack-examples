"use strict";
exports.__esModule = true;
exports.Baraja = void 0;
var palos;
(function (palos) {
    palos["espadas"] = "espadas";
    palos["bastos"] = "bastos";
    palos["oros"] = "oros";
    palos["copas"] = "copas";
})(palos || (palos = {}));
var Carta = /** @class */ (function () {
    function Carta(n, p) {
        this.numero = n;
        this.palo = p;
    }
    return Carta;
}());
var Baraja = /** @class */ (function () {
    function Baraja(palo, num) {
        var _this = this;
        if (palo === void 0) { palo = ["espadas", "bastos", "oros", "copas"]; }
        if (num === void 0) { num = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]; }
        this.cartas = [];
        this.monton = [];
        palo.forEach(function (p) {
            num.forEach(function (n) {
                _this.cartas.push(new Carta(n, p));
            });
        });
    }
    Baraja.prototype.barajar = function () {
        for (var i = 0; i < 40; i++) {
            var j = Math.floor(Math.random() * 40);
            var cartaTemp = this.cartas[i];
            this.cartas[i] = this.cartas[j];
            this.cartas[j] = cartaTemp;
        }
    };
    Baraja.prototype.siguienteCarta = function () {
        var carta = this.cartas.shift();
        if (carta === undefined) {
            carta = 'Ya no quedan mas cartas en la Baraja';
        }
        else {
            this.monton.push(carta);
        }
        return carta;
    };
    Baraja.prototype.cartasDisponibles = function () {
        return this.cartas.length;
    };
    Baraja.prototype.darCartas = function (n) {
        var cartas = [];
        if (this.cartas.length >= n) {
            cartas = this.cartas.splice(0, n);
            this.monton = this.monton.concat(cartas);
        }
        else {
            cartas = 'No hay suficientes cartas disponibles';
        }
        return cartas;
    };
    Baraja.prototype.cartasMonton = function () {
        var cartas = this.monton;
        if (cartas.length === 0) {
            cartas = 'No ha salido cartas todavia';
        }
        return cartas;
    };
    Baraja.prototype.mostrarBaraja = function () {
        return this.cartas;
    };
    return Baraja;
}());
exports.Baraja = Baraja;
