import { Serie } from "./Serie";
import { Libro } from "./Libro";

let rm = new Serie("Rick and Morty", 4, false, "Scifi-comedy","Dan Harmon and Justin Roiland")
let st = new Serie("Star Trek Piccard", 1, false, "Scifi", "Akiva Goldsman")
let mw = new Serie("Man With a Plan", 4, false, "Comedy", "Pamela Fryman")
let fr = new Serie("Futurama", 7, true, "Scifi", "Matt Groening")
let at = new Serie("Adventure Time", 10, false, "Adventure", "Pendleton Ward")

let it = new Libro("IT", "Stephen King", 60, false, "Horror","Viking")
let lr = new Libro("Lord of the rings", "J.R.R. Tolkien", 400, false, "Fantasy", "Allen & Unwin")
let hp =  new Libro("The philosophers stone", "J.K. Rowling", 50, false, "Fantasy", "Bloomsburry")
let hb = new Libro("The Hobbit", "J.R.R. Tolkien", 40, true, "Fantasy", "George Allen & Unwin")
let nn = new Libro("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 50, false, "Fantasy", "Geoffrey Bles")

let series: Serie[] = [rm, st, mw, fr, at]
let libros: Libro[] = [it, lr, hp, hb, nn]
rm.entregar()
st.entregar()
it.entregar()
hp.entregar()

console.log(devolver(series, libros))
masLargo(series, libros)

function devolver(a: Serie[], b: Libro[]):number {
    let n:number = 0
    a.forEach(c => {
        if(c.isEntregado()){
            c.devolver()
            n++
        }
    })
    b.forEach(c => {
        if(c.isEntregado()){
            c.devolver()
            n++
        }
    })
    return n
}
function masLargo(a: Serie[], b: Libro[]){
    let serie:Serie = a[0]
    a.forEach(c => {
        if(serie.compareTo(c) > 0){
            serie = c 
        }
    })
    let libro:Libro = b[0]
    b.forEach(c => {
        if(libro.compareTo(c) > 0){
            libro = c
        }
    })
    console.log(`
Libro:
    ${libro.toString()}
Serie:
    ${serie.toString()}
    `)

}