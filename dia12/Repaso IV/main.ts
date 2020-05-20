import { Punto } from './Punto'
import {Triangulo} from "./triangulo";

let p1 = new Punto(-1,-2)
let p2 = new Punto(2,2)
let p3 = new Punto(10, 10);
let TRI = new Triangulo(p1, p2, p3);

console.log(p1.toString())
console.log(p1.distanciaAlOrigen())
console.log(p1.calcularDistancia(p2))
console.log(p1.calcularDistancia(p3))
console.log(p2.calcularDistancia(p3))
// console.log(p1.calcularCuadrante());
// console.log(p1.masCercano([p2, p3]));
console.log(TRI.calcularLongLados());
