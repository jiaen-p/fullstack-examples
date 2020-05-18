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

let world = [asia, africa, americas, australia, europa]

export function printContinente(pais: string){
    let i: number = 0
    let contains: boolean = false
    while(i< world.length && !contains){
        let j = 0;
        while(!contains && j < world.length){
            contains = world[i].paises[j] === pais
            j++
        }
        if(contains){
            console.log(world[i].continente)
        }
        i++
    }
}
