let barcelona = [58, "barcelona"]
let rMadrid = [56, "real madrid"]
let getafe = [46, "getafe"]
let levante = [33, "levante"]
let valladolid = [29, "valladolid"]
let eibar = [27, "eibar"]
let atletico = [45, "atletico"]
let osasuna =[34, "osasuna"]
let betis =[33, "betis"]
let rSociedad = [46, "real sociedad"]
let leganes = [23, "leganes"]
let espanyol = [20, "espanyol"]

let clubs = [barcelona, rMadrid, getafe, levante, valladolid, eibar, atletico, osasuna, betis, rSociedad, leganes, espanyol]
clubs.sort().reverse() 
console.log("club ", clubs)

let n = clubs.length - 1

clubs.forEach((club, index) => {
    switch (index) {
        case 0:
            console.log("Gana la liga y pasa a la champions: ", club[1])
            break;
        case 1:
            console.log("Pasa a la champions: ", club[1])
            break;
        case 2:
            console.log("Pasa a la champions: ", club[1])
            break;
        case 3:
            console.log("Pasa a la champions: ", club[1])
            break;
        case 4: 
            console.log("Pasa a la uefa: ", club[1])
            break;
        case 5: 
            console.log("Pasa a la uefa: ", club[1])
            break;
        case n-2:
            console.log("Descenso: ", club[1])
            break;
        case n-1:
            console.log("Descenso: ", club[1])
            break;
        case n:
            console.log("Descenso: ", club[1])
            break;
        default:
            break;
    }
})