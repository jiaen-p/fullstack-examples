import { Person } from './Person'
import { Platform } from './Platform'
import { Videogame } from './Videogame'


let p1 = new Person("Juan", "Español", "developer", 15)
let p2 = new Person("Pablo", "Español", "developer", 10)
let d1 = new Person("Nana", "UK", "director", 5)

let pcmr = new Platform("PC", 2020, "Any", 64, 10, true, 100, true, "cd", "gris")
let ps4 = new Platform("ps4", 2015, "sony", 64, 4, true, 120, true, "bluray", "black")

let tk = new Videogame ("tekken 7",2018, [p1,p2], "Japan", d1, ["English", "Spanish", "Japanese"], [ps4], 40, 8)
console.log(p1.getName())
tk.print()
console.log(tk.availableInLanguage("German"))
console.log(tk.developedBy(p1), tk.developedBy(d1))
console.log(tk.availableInPlatform(pcmr))