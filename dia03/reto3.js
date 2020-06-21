let restA = {
    "numPlatos": 3,
    "dj": true,
    "hBarra": 2,
    "coctel": true
}
let restB = {
    "numPlatos": 2,
    "dj": true,
    "coctel": true,
}
let restC = {
    "numPlatos": 1,
    "dj": true,
    "coctel": true,
    "hBarra": 2
}

let rest  = [restA, restB, restC]
rest.forEach((res, i ) => {
    if ((res.numPlatos >= 3 && res.dj && res.hBarra >= 2) || (res.coctel && res.numPlatos >= 2 && res.hBarra >=1)){
        console.log("el restaurante en la posicion " + i + " cumple las condiciones") 
    }
})

