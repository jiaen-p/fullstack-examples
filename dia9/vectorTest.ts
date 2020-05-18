import { Vector } from './vector'

let v1: Vector = new Vector(3, 2)
let v2: Vector = new Vector(3, 2)
v1.print()
v2.print()
console.log("suma")
v1.add(v2).print()
console.log("resta")
v1.subs(v2).print()
console.log("producto vectorial")
v1.mult(v2).print()
console.log("producto escalar")
v2.multNumber(3).print()