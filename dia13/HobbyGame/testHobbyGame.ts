import { HobbyGame } from './HobbyGame'
import { Person } from './Person'
import { Platform } from './Platform'
import { Videogame } from './Videogame'


let p1 = new Person("Juan", "Español", "developer", 15)
let p2 = new Person("Pablo", "Español", "developer", 10)
let p3 = new Person("Juana", "Francesa", "developer", 20)
let d1 = new Person("Nana", "UK", "director", 5)

let pcmr = new Platform("PC", 2020, "Any", 64, 10, true, 100, true, "cd", "gris")
let ps4 = new Platform("ps4", 2015, "sony", 64, 4, true, 120, true, "bluray", "black")
let sw = new Platform("Switch", 2016, "Nintendo", 64, 4, true, 32, true, "tarjeta", "negro")

let tk = new Videogame ("tekken 7",2018, [p1,p2], "Japan", d1, ["English", "Spanish", "Japanese"], [ps4,pcmr,sw], 40, 8)
let re = new Videogame ("residen evil", 2020, [p1,p3], "Japan", d1, ["Russian", "Japanese", "Polska","English"], [ps4,sw], 60, 4)
let mk = new Videogame("Mario Kart 8", 2017, [p2,p3], "Japan", d1, ["English", "Spanish", "Portuguese", "French"], [sw], 50, 7)
let store = new HobbyGame([tk,mk,re])

console.log(store.allGamesPriceFrom(ps4))
console.log(store.allGamesPrice())

store.allGamesAvailableForPlatformAndInLanguagueAndGreterThanFive(sw, "English").forEach(game => { game.print() })
console.log("-------------------------------------------------------------------------");
store.allGamesAvailableForPlatformAndInLanguague(sw, "English").forEach(game => game.print())
console.log("-------------------------------------------------------------------------");
store.allGamesDevelopedBy(p1).forEach(game => game.print())
console.log("-------------------------------------------------------------------------");
// store.allGamesInLanguage("Japanese")

// ----------------------------------------------------------------------------------------------
import * as fs from 'fs-extra'
fs.writeJsonSync('./hobbyGameBBDD.json', store.toJson() )

let store2 = HobbyGame.getInstance('hobbyGameBBDD')