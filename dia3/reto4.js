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

personas.forEach(persona => {
    if (persona.colorPelo === "castaño"){
        console.log(persona.nombre)
    }
    if ((2020 - persona.anyoNacimiento) > 30) {
        console.log(2020 - persona.anyoNacimiento)
    } 
    if ( (persona.colorPelo === "negro" && (2020-persona.dni.anyoExpedicion) > 10) || ((2020-persona.anyoNacimiento) < 18 && 
        (persona.aficiones.includes("dormir") || persona.aficiones.includes("comer")))
    ){
        console.log(persona.dni.lugarNacimiento)
    }
})