import { numCaracterArr } from './reto8'
import { parImpar } from './parImpar'

let v1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"]
let v2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]
let v3: string[] = ["Venezuela", "Veneno", "Voltaje"]

let num1:number = numCaracterArr(v1)
let num2:number = numCaracterArr(v2)
let num3:number = numCaracterArr(v3)

// pasar num1, num2, num3 para ver si son pares o impares
console.log(parImpar(num1))
console.log(parImpar(num2))
console.log(parImpar(num3))