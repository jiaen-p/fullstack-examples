// apartado 1 for
let n = 4;
let fact = 1;
for (i = 1; i <= n ; i++){
    fact *= i
}
console.log(fact)
// apartado 1 while
n = 4;
fact = 1;
let k = 1;
while (k <= n){
    fact *= k
    k++
}
// apartado 2
let arraynum = []
for(i = 7; i < 100; i++){
    arraynum.push(i)
}
let j = 0

while (j < arraynum.length && arraynum[j]%2!==0 ){
    j++
}
console.log("si existe al menos un num multiplo de dos: ", arraynum[j])

// apartado 3
let sum = 0;
for(i = 0; i < 100; i++){
    sum += i
}
console.log(sum)


// apartado 4
let nombres = ["Pedro","Juan","Pablo","Pepe","Cristina","Maria","Manuel"]
k = 0;
while (k < nombres.length && nombres[k] !== "Pepe"){
    k++
}
if(nombres[k] === "Pepe"){
    console.log("pepe en la lista en posicion", k)
} else {
    console.log("pepe no esta en la lista")
}

// apartado 5
let vector1 = []
let vector2 = []
for(i = 0; i < 100; i++){
    vector1.push(Math.floor(Math.random()*21))
    vector2.push(Math.floor(Math.random()*21))
}

// suma vectorial
let sumaVectorial = []
for(i = 0; i < 100; i++){
    sumaVectorial.push(vector1[i]+vector2[i])
}
console.log(sumaVectorial)

// suma aritmetica
let reducer = (accumulator, currentValue) => accumulator + currentValue

console.log("la suma total es: ", vector1.reduce(reducer) + vector2.reduce(reducer))