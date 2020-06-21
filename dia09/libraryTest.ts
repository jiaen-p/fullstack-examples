import { Library } from './library'
import { Book } from './book'


let b1 = new Book("Maquinas electricas", 1200, "esn-qweoriuad","Fraile Mora", "mcgrowhill")
let b2 = new Book("The theory of everything", 132, "978-8179925911", "Stephen Hawking", "Jaico Publishing House")
let b3 = new Book("A brief history of time", 272, "653219-65a4d32", "Stephen Hawking", "Batam Press")

let lib1 = new Library([b1,b2,b3], "Madrid 42", "Publica")

console.log(lib1.getAddress(), lib1.getBooks(), lib1.getManager(), lib1.getNumberOfBooks())

console.log("from toString----------------------------------------\n",lib1.toString())

lib1.findByAuthor("Stephen Hawking").forEach(book => {
    console.log("-------------------------------------------------\n",book.toString())
})

