import { Matrix } from './matrix'

let m1: Matrix = new Matrix(3,3,2)
let m2: Matrix = new Matrix(3,3,1)
m1.print()
m1.multSpecial(3).print()
m2.print()
m1.add(m2).print()