import { Espectador } from "./Espectador";
import { Pelicula } from "./Pelicula";
import { Cine } from "./Cine";

let p1 = new Pelicula("Ender's game", 120, 12, "Gavin Hood")
let c1 = new Cine(p1, 15)
let espectadores:Espectador[] = []
let n = 120 // numbero de espectadores

for(let i = 0; i < n; i++){
    let edad = Math.floor(Math.random()*i + 10)
    let dinero = Math.random() * 100
    espectadores.push(new Espectador('espectador #' + i, edad, dinero ))
    // console.log(`${i}   ${dinero}`)
}


espectadores.forEach((espectador, index) => {
    c1.comprarEntrada(espectador)
    console.log(`${index}   ${espectador.getAsiento()}`)
})

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