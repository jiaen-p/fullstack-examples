const Coche = require('./coche')
const Concesionario = require('./concesionario')


let rx7 = new Coche("Mazda","rx7", "manual", "azul", 2, 3, "gasolina")
let miata = new Coche("Mazda", "miata", "manual", "blanco", 2,4, "gasolina")

let fairlady = new Coche("Nissan", "fairlady Z", "manual", "azul", 2, 6, "gasolina")
let godzilla = new Coche("Nissan", "r32 godzilla", "manual", "gris", 2, 6, "gasolina")

let Nissan = new Concesionario([fairlady, godzilla], "Nissan Madrid", "C/Nissan")

let Mazda = new Concesionario([rx7,miata], "Mazda for the win", "C/Que mazda")

console.log( Mazda.getCoches() + "\n" + Nissan.getDireccion())


console.log(Mazda.getNombreConcesionario() + "\n" + Mazda.getDireccion())