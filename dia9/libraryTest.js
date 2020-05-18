"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var book_1 = require("./book");
var b1 = new book_1.Book("Maquinas electricas", 1200, "esn-qweoriuad", "Fraile Mora", "mcgrowhill");
var b2 = new book_1.Book("The theory of everything", 132, "978-8179925911", "Stephen Hawking", "Jaico Publishing House");
var b3 = new book_1.Book("A brief history of time", 272, "653219-65a4d32", "Stephen Hawking", "Batam Press");
var lib1 = new library_1.Library([b1, b2, b3], "Madrid 42", "Publica");
console.log(lib1.getAddress(), lib1.getBooks(), lib1.getManager(), lib1.getNumberOfBooks());
console.log("from toString----------------------------------------\n", lib1.toString());
lib1.findByAuthor("Stephen Hawking").forEach(function (book) {
    console.log("-------------------------------------------------\n", book.toString());
});
