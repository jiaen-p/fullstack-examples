"use strict";
exports.__esModule = true;
var Espectador_1 = require("./Espectador");
var Pelicula_1 = require("./Pelicula");
var Cine_1 = require("./Cine");
var p1 = new Pelicula_1.Pelicula("Ender's game", 120, 12, "Gavin Hood");
var c1 = new Cine_1.Cine(p1, 15);
var espectadores = [];
var n = 120; // numbero de espectadores
for (var i = 0; i < n; i++) {
    var edad = Math.floor(Math.random() * i + 10);
    var dinero = Math.random() * 100;
    espectadores.push(new Espectador_1.Espectador('espectador #' + i, edad, dinero));
    // console.log(`${i}   ${dinero}`)
}
espectadores.forEach(function (espectador, index) {
    c1.comprarEntrada(espectador);
    console.log(index + "   " + espectador.getAsiento());
});
// let esp = new Espectador("prueba", 18, 80)
// let esp2 = new Espectador("prueba", 2, 80)
// let esp3 = new Espectador("aosid", 18, 10)
// let esp4 = new Espectador("prueba", 2, 80)
// let esp5 = new Espectador("prueba", 18, 80)
// c1.comprarEntrada(esp2)
// console.log(esp2.getAsiento())
// c1.comprarEntrada(esp)
// console.log(esp.getAsiento())
// c1.comprarEntrada(esp3)
// console.log(esp3.getAsiento())
// c1.comprarEntrada(esp4)
// console.log(esp4.getAsiento())
// c1.comprarEntrada(esp5)
// console.log(esp5.getAsiento())
