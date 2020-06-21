import { Book } from './book'

let b1 = new Book("Maquinas electricas", 1200, "esn-qweoriuad","Fraile Mora", "mcgrowhill")

console.log (b1.getAuthor(), b1.getEditorial(), b1.getISSN(), b1.getNPages(), b1.getTitle())

b1.setAuthor("Jesus Fraile Mora")
b1.setEditorial("McGrowHill")
b1.setISSN("notkalsdfkj")
b1.setNPages(1500)
b1.setTitle("Maquinas Electricas I")
console.log(b1.toString())