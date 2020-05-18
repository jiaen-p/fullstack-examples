let persona1 = {
    "nombre": "Juan",
    "apellido" : "Bautista",
    "anyoNacimiento" : 1970,
    "aficiones": ["wrestling", "actor", "leg days"],
    "dni":{
        "anyoExpedicion": 2015,
        "lugarNacimiento": "EE.UU"
    },
    "colorPelo": "castaño"
}

let persona2 = {
    "nombre": "Toni",
    "apellido" : "Stark",
    "anyoNacimiento" : 1984,
    "aficiones": ["tech", "millionar", "robots"],
    "dni":{
        "anyoExpedicion": 2012,
        "lugarNacimiento": "India"
    },
    "colorPelo": "castaño"
}

let persona3 = {
    "nombre": "Pedro",
    "apellido" : "Banana",
    "anyoNacimiento" : 2018,
    "aficiones": ["oxidar", "dormir"],
    "dni":{
        "anyoExpedicion": 2020,
        "lugarNacimiento": "Canarias"
    },
    "colorPelo": "rubio"
}

let persona4 = {
    "nombre": "jhon",
    "apellido" : "cena",
    "anyoNacimiento" : 1989,
    "aficiones": ["wrestling", "escondite", "leg days"],
    "dni":{
        "anyoExpedicion": 2008,
        "lugarNacimiento": "EE.UU"
    },
    "colorPelo": "negro"
}

let personas = [persona1, persona2, persona3, persona4]
// apartado 1 for
for (i = 0; i < personas.length; i++){
    console.log(personas[i])
}
// apartado 1 while
let k = 0;
while(k < personas.length){
    console.log(personas[k])
}

// apartado 2 for
for(i = 0; i < personas.length; i++){
    if(personas[i].anyoNacimiento < 2000 && personas[i].anyoNacimiento > 1978){
        console.log(personas[i])
    }
}
// apartado 2 while
k = 0;
while (k < personas.length){
    if(personas[k].anyoNacimiento < 2000 && personas[k].anyoNacimiento > 1978){
        console.log(personas[k])
    }
    k++
}

// apartado 3 for
for(i = 0; i < personas.length; i++){
    if(personas[i].anyoNacimiento < 2000 && personas[i].anyoNacimiento > 1978){
        console.log("Tu edad esta entre 40 y 20 años", personas[i].nombre)
    } else {
        console.log("Tu edad es menor de 20", personas[i].nombre)
    }
}
// apartado 3 while
k = 0;
while (k < personas.length){
    if(personas[k].anyoNacimiento < 2000 && personas[k].anyoNacimiento > 1978){
        console.log("Tu edad esta entre 40 y 20 años",personas[k].nombre)
    } else {
        console.log("Tu edad es menor de 20", personas[k].nombre)
    }
    k++
}
// apartado 4
for(i = 0; i < personas.length; i++){
    personas[i].aficiones.push("jugar a la play")
}