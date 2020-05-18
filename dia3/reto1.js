let vieneCoches = false;
let semaforoPaso = "red";
let cruzar = false;

if (!vieneCoches && semaforoPaso === "green" ){
    cruzar = true;
    console.log("Puedes cruzar", cruzar)
} else if (vieneCoches && semaforoPaso === "red"){
    console.log("No cruces viene un coche y el semaforo esta en rojo", cruzar)
} else if (!vieneCoches && semaforoPaso === "red"){
    cruzar = true;
    console.log("No vienen coches pero no deberias de cruzar porque el semaforo esta en rojo", cruzar)
}