"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var rd = require("readline-sync");
var HobbyGame_1 = require("./HobbyGame");
var Person_1 = require("./Person");
var Platform_1 = require("./Platform");
var Videogame_1 = require("./Videogame");
var p1 = new Person_1.Person("Juan", "Español", "developer", 15);
var p2 = new Person_1.Person("Pablo", "Español", "developer", 10);
var p3 = new Person_1.Person("Juana", "Francesa", "developer", 20);
var d1 = new Person_1.Person("Nana", "UK", "director", 5);
var pcmr = new Platform_1.Platform("PC", 2020, "Any", 64, 10, true, 100, true, "cd", "gris");
var ps4 = new Platform_1.Platform("ps4", 2015, "sony", 64, 4, true, 120, true, "bluray", "black");
var sw = new Platform_1.Platform("Switch", 2016, "Nintendo", 64, 4, true, 32, true, "tarjeta", "negro");
var tk = new Videogame_1.Videogame("tekken 7", 2018, [p1, p2], "Japan", d1, ["English", "Spanish", "Japanese"], [ps4, pcmr, sw], 40, 8);
var re = new Videogame_1.Videogame("residen evil", 2020, [p1, p3], "Japan", d1, ["Russian", "Japanese", "Polska", "English"], [ps4, sw], 60, 4);
var mk = new Videogame_1.Videogame("Mario Kart 8", 2017, [p2, p3], "Japan", d1, ["English", "Spanish", "Portuguese", "French"], [sw], 50, 7);
var store = new HobbyGame_1.HobbyGame([tk, mk, re]);
var title = rd.question('Game title: ');
var year = rd.question('Released year: ');
var developer = [];
var done = false;
while (!done) {
    developer.push(new Person_1.Person(rd.question('Developer name: '), rd.question('Developer nationality: '), "developer", Number(rd.question('Years of experience: '))));
    done = rd.question('are there more developers? (yes/no)') === 'no';
}
var nationality = rd.question('Game nationality: ');
var director = new Person_1.Person(rd.question('Directors name: '), rd.question('Directors nationality: '), "director", rd.question('Years of experience: '));
var i = 0;
var n = Number(rd.question('Number of languages available: '));
var lang = [];
while (i < n) {
    lang.push(rd.question('input one language at a time: '));
    i++;
}
var p = [];
done = false;
while (!done) {
    p.push(new Platform_1.Platform(rd.question('Platform Name: '), Number(rd.question('Release Year: ')), rd.question('Company Name: '), Number(rd.question('Number of Bits: ')), Number(rd.question('Generation: ')), Boolean(rd.question('Has HardDrive (yes/no): ') === 'yes'), Number(rd.question('HardDrive size(GB): ')), Boolean(rd.question('Has Internet connection (yes/no): ') === 'yes'), rd.question('Storage device (cd, dvd, tarjeta, cartucho, bluray): '), rd.question('Color of the system: ')));
    done = rd.question('available in more platforms? (yes/no): ') === 'no';
}
var price = Number(rd.question('Game Price: '));
var score = rd.question('Game Score (0-10): ');
var vg = new Videogame_1.Videogame(title, year, developer, nationality, director, lang, p, price, score);
store.setGames(__spreadArrays(store.getGames(), [vg]));
store.writeOnJSONFile('hobbyGameBBDD');
