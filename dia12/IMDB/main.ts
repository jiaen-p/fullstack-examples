import {Professional} from "./professional";
import {Imdb} from "./imdb";

let alex = new Professional('alex', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
let jiaen = new Professional('jiaen', 28, 'masc', 76, 186, 'black', 'brown', 'asiatic', false, 'spanish', 3, 'b-ball coach');
let mmm = new Professional('mmm', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach')
console.log(alex.print());
console.log(jiaen.print());

// ----------------------------------------------

import { Movie } from './Movie'

let m1 = new Movie("Infinity War",[jiaen], 2018, "USA", "Action", mmm)
m1.print()

let m2 = new Movie("Guns Akimbo",[alex], 2020, "UK, New Zealand and West Germany", "Comedy and Action", mmm)
m2.print()

let myImdb = new Imdb([m1, m2]);

// let imdbBBDD = myImdb.toJSON()

// --------------------------------------------
myImdb.escribirEnFicheroJson("peliculas")

console.log("to json",Imdb.obtenerInstanciaIMSB("peliculas").toJSON().peliculas)
//  -----------------------
import * as readline from 'readline-sync'

let acabado = false;
let actores: Professional[] = [];
while(!acabado){
    let actor = new Professional(readline.question('Actor\nName: '),
                Number(readline.question('Age: ')),
                readline.question('Genre: '),
                Number(readline.question('Weight: ')),
                Number(readline.question('Heigth: ')),
                readline.question('Hair Color: '),
                readline.question('Eye Color: '),
                readline.question('Race: '),
                Boolean(readline.question('Is Retired: ')),
                readline.question('Nationality: '),
                Number(readline.question('Oscars: ')),
                readline.question('Profession: '))
    actores.push(actor)
    acabado = readline.question('Hay mas actores?(si/no) ') === 'no'
}

let p1 = new Movie(readline.question('Titulo: '),
            actores,
            Number(readline.question('Año: ')), 
            readline.question('Pais: '),
            readline.question('Genero: '),
            new Professional(readline.question('Director\nName: '),
            Number(readline.question('Age: ')),
            readline.question('Genre: '),
            Number(readline.question('Weight: ')),
            Number(readline.question('Heigth: ')),
            readline.question('Hair Color: '),
            readline.question('Eye Color: '),
            readline.question('Race: '),
            Boolean(readline.question('Is Retired: ')),
            readline.question('Nationality: '),
            Number(readline.question('Oscars: ')),
            readline.question('Profession: ')));

myImdb.peliculas.push(p1);
myImdb.escribirEnFicheroJson('imdbBBDD');
