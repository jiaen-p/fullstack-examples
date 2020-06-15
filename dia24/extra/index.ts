import { Serie } from "./Serie";
import { Libro } from "./Libro";

let rm = new Serie("Rick and Morty", 4, true, "Scifi-comedy","Dan Harmon and Justin Roiland")
let st = new Serie("Star Trek Piccard", 1, true, "Scifi", "Akiva Goldsman")
let mw = new Serie("Man With a Plan", 4, true, "Comedy", "Pamela Fryman")
let fr = new Serie("Futurama", 7, true, "Scifi", "Matt Groening")
let at = new Serie("Adventure Time", 10, true, "Adventure", "Pendleton Ward")

let it = new Libro("IT", "Stephen King", 60, true, "Horror","Viking")
let lr = new Libro("Lord of the rings", "J.R.R. Tolkien", 400, true, "Fantasy", "Allen & Unwin")
let hp =  new Libro("The philosophers stone", "J.K. Rowling", 50, true, "Fantasy", "Bloomsburry")
let hb = new Libro("The Hobbit", "J.R.R. Tolkien", 40, true, "Fantasy", "George Allen & Unwin")
let nn = new Libro("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 50, true, "Fantasy", "Geoffrey Bles")

let series: Serie[] = [rm, st, mw, fr, at]
let libros: Libro[] = [it, lr, hp, hb, nn]