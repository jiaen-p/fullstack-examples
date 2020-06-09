"use strict";
exports.__esModule = true;
var Serie_1 = require("./Serie");
var Libro_1 = require("./Libro");
var rm = new Serie_1.Serie("Rick and Morty", 4, false, "Scifi-comedy", "Dan Harmon and Justin Roiland");
var st = new Serie_1.Serie("Star Trek Piccard", 1, false, "Scifi", "Akiva Goldsman");
var mw = new Serie_1.Serie("Man With a Plan", 4, false, "Comedy", "Pamela Fryman");
var fr = new Serie_1.Serie("Futurama", 7, true, "Scifi", "Matt Groening");
var at = new Serie_1.Serie("Adventure Time", 10, false, "Adventure", "Pendleton Ward");
var it = new Libro_1.Libro("IT", "Stephen King", 60, false, "Horror", "Viking");
var lr = new Libro_1.Libro("Lord of the rings", "J.R.R. Tolkien", 400, false, "Fantasy", "Allen & Unwin");
var hp = new Libro_1.Libro("The philosophers stone", "J.K. Rowling", 50, false, "Fantasy", "Bloomsburry");
var hb = new Libro_1.Libro("The Hobbit", "J.R.R. Tolkien", 40, true, "Fantasy", "George Allen & Unwin");
var nn = new Libro_1.Libro("The Lion, the Witch and the Wardrobe", "C.S. Lewis", 50, false, "Fantasy", "Geoffrey Bles");
var series = [rm, st, mw, fr, at];
var libros = [it, lr, hp, hb, nn];
rm.entregar();
st.entregar();
it.entregar();
hp.entregar();
console.log(devolver(series, libros));
masLargo(series, libros);
function devolver(a, b) {
    var n = 0;
    a.forEach(function (c) {
        if (c.isEntregado()) {
            c.devolver();
            n++;
        }
    });
    b.forEach(function (c) {
        if (c.isEntregado()) {
            c.devolver();
            n++;
        }
    });
    return n;
}
function masLargo(a, b) {
    var serie = a[0];
    a.forEach(function (c) {
        if (serie.compareTo(c) > 0) {
            serie = c;
        }
    });
    var libro = b[0];
    b.forEach(function (c) {
        if (libro.compareTo(c) > 0) {
            libro = c;
        }
    });
    console.log("\nLibro:\n    " + libro.toString() + "\nSerie:\n    " + serie.toString() + "\n    ");
}
