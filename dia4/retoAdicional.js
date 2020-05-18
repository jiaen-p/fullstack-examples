let nombres = ["Pedro","Juan","Pablo","Cristina","Maria","Manuel","Pepe"]

let existe = false

let i = 0;


while (i < nombres.length && !existe){
    existe = nombres[i]==="Pepe"
    i++
}
console.log("esta pepe en lista", existe)