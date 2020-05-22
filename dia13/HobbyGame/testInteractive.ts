import * as rd from 'readline-sync'
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

let title:string = rd.question('Game title: ')
let year: number = rd.question('Released year: ')
let developer: Person[] = []
let done = false 
while (!done){
    developer.push(new Person(
        rd.question('Developer name: '),
        rd.question('Developer nationality: '),
        "developer",
        Number(rd.question('Years of experience: '))
    ))
    done = rd.question('are there more developers? (yes/no)') === 'no'
}
let nationality:string = rd.question('Game nationality: ')
let director = new Person(
    rd.question('Directors name: '),
    rd.question('Directors nationality: '),
    "director",
    rd.question('Years of experience: ')
)
let i = 0 
let n:number = Number(rd.question('Number of languages available: '))
let lang: string[] = []
while (i < n){
    lang.push(rd.question('input one language at a time: '))
    i++
}
let p: Platform[] = []
done = false
while (!done){
    p.push(new Platform(
        rd.question('Platform Name: '),
        Number(rd.question('Release Year: ')),
        rd.question('Company Name: '),
        Number(rd.question('Number of Bits: ')),
        Number(rd.question('Generation: ')),
        Boolean(rd.question('Has HardDrive (yes/no): ') === 'yes'),
        Number(rd.question('HardDrive size(GB): ')),
        Boolean(rd.question('Has Internet connection (yes/no): ') === 'yes'),
        rd.question('Storage device (cd, dvd, tarjeta, cartucho, bluray): '),
        rd.question('Color of the system: ')
    ))
    done = rd.question('available in more platforms? (yes/no): ') === 'no'
}
let price: number = Number(rd.question('Game Price: '))
let score: 0|1|2|3|4|5|6|7|8|9|10 = rd.question('Game Score (0-10): ')

let vg = new Videogame(title, year, developer, nationality, director, lang, p, price, score)
store.setGames([...store.getGames(),vg])
store.writeOnJSONFile('hobbyGameBBDD')