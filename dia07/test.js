const Persona = require('./personas')
const Agenda = require('./agenda')
const Vector = require('./vector')
const Matrix = require('./matrix')
let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan", 1994, ["Movies","Music","Videogames"])

let p2 = new Persona(26, 1.8, 60, "blue", "purple", "Someone", "Fictional", 2010, ["wrist watches","movies"])


let agenda = new Agenda([p1,p2])

// agenda.printPersonas()


let v1 = new Vector(3,1)
let v2 = new Vector(3,1)

// console.log(v1.vector,v2.vector)


// console.log(v1.producto_vector(v2))



let m1 = new Matrix (3,3,10)

console.log(m1.generate_num())

m1.incluye()
console.table(m1.matrix)