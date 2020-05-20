import {empiezanIgual, printContinente, esPar} from "./RepasoWhile";
import {imparesHasta, reverse, numCaracterArr} from "./RepasoFor";
import {signoZod, arcoIris, parImpar} from "./RepasoIF";

let africa = {
    "paises": ["Nigeria", "Ethiopia", "Egypt", "Democatic Republic of the Congo", "South Africa"],
    "continente":"africa"
}
let europa = {
    "paises": ["Russia", "Germany", "Turkey", "France", "United Kingdom"],
    "continente": "europa"
}
let asia = {
    "paises": ["Japan", "China", "Indonesia", "India", "Thailand"],
    "continente": "asia"
}
let americas = {
    "paises": ["United States of America", "Brazil", "Mexico", "Colombia", "Argentina"],
    "continente": "america"
}
let australia = {
    "paises": ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands"],
    "continente": "australia"
}

let v1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let v2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let v3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let num1:number = numCaracterArr(v1)
let num2:number = numCaracterArr(v2)
let num3:number = numCaracterArr(v3)

console.log(arcoIris(['negro', 'rojo', 'azul', 'magenta']));
console.log(signoZod(4,10));
console.log(imparesHasta(10));
console.log(reverse([4, 3, 7]));

console.log(parImpar(num1))
console.log(parImpar(num2))
console.log(parImpar(num3))

console.log(empiezanIgual(['Marc', 'Monica']));
console.log(empiezanIgual(['Marc', 'Alex']));
console.log(esPar([10, 8, 7, 3]));
console.log(printContinente('Russia'));






