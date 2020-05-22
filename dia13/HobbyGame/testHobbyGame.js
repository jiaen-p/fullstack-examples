"use strict";
exports.__esModule = true;
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
console.log(store.allGamesPriceFrom(ps4));
console.log(store.allGamesPrice());
store.allGamesAvailableForPlatformAndInLanguagueAndGreterThanFive(sw, "English").forEach(function (game) { game.print(); });
console.log("-------------------------------------------------------------------------");
store.allGamesAvailableForPlatformAndInLanguague(sw, "English").forEach(function (game) { return game.print(); });
console.log("-------------------------------------------------------------------------");
store.allGamesDevelopedBy(p1).forEach(function (game) { return game.print(); });
console.log("-------------------------------------------------------------------------");
// store.allGamesInLanguage("Japanese")
// ----------------------------------------------------------------------------------------------
var fs = require("fs-extra");
fs.writeJsonSync('./hobbyGameBBDD.json', store.toJson());
var store2 = HobbyGame_1.HobbyGame.getInstance('hobbyGameBBDD');
