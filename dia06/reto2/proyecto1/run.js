const calc = require('./index')
const vect = require('./vector')
const matriz = require('./matriz')

// suma 
// console.log(calc.suma(12,45))
// // resta
// console.log(calc.resta(54,12))
// // multiplicacion
// console.log(calc.producto(3,5))
// // division
// console.log(calc.division(555,342))

// let v = vect.crear_vector(3,4)
// let u = vect.crear_vector(2,4)


// console.log("producto vectorial",vect.producto_vector(v,u))
// console.log("suma de dos vectores",vect.suma_vector(u,v))
// console.log("resta de vectores",vect.resta_vector(u,v))
// console.log("vector por constante", vect.producto_num_vect(2,u))


let A = matriz.crear_matriz(3,3,1)
let B = matriz.crear_matriz(3,3,1)
console.table(A)
console.table(B)
let C = matriz.producto_matriz(A,B)

console.table(C)