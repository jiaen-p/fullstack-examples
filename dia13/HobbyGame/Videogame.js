"use strict";
exports.__esModule = true;
exports.Videogame = void 0;
var Videogame = /** @class */ (function () {
    function Videogame(title, releaseYear, developers, nationality, director, languages, platforms, price, score) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
    }
    Videogame.prototype.availableInPlatform = function (platform) {
        var res = false;
        var i = 0;
        while (!res && i < this.platforms.length) {
            res = this.platforms[i].samePlatform(platform);
            i++;
        }
        return res;
    };
    Videogame.prototype.developedBy = function (developer) {
        var res = false;
        var i = 0;
        while (!res && i < this.developers.length) {
            res = this.developers[i].samePerson(developer);
            i++;
        }
        return res;
    };
    Videogame.prototype.availableInLanguage = function (language) {
        var res = false;
        var i = 0;
        while (!res && i < this.languages.length) {
            res = this.languages[i] === language;
            i++;
        }
        return res;
    };
    Videogame.prototype.toString = function () {
        var dev = '';
        this.developers.forEach(function (d) { return dev += d.toString() + ', '; });
        var plat = '';
        this.platforms.forEach(function (p) { return plat += p.toString() + ', '; });
        return ("\n        Title: " + this.title + ",\n        Released year: " + this.releaseYear + ",\n        Developers: " + dev + "\n        From: " + this.nationality + ",\n        Directed by: " + this.director.getName() + ",\n        Available in: " + this.languages + ",\n        Available for: " + plat + "\n        Score: " + this.score + ",\n        Price: " + this.price + "\n        ");
    };
    Videogame.prototype.print = function () {
        console.log(this.toString());
    };
    Videogame.prototype.getTitle = function () {
        return this.title;
    };
    Videogame.prototype.setTitle = function (value) {
        this.title = value;
    };
    Videogame.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Videogame.prototype.setReleaseYear = function (value) {
        this.releaseYear = value;
    };
    Videogame.prototype.getDevelopers = function () {
        return this.developers;
    };
    Videogame.prototype.setDevelopers = function (value) {
        this.developers = value;
    };
    Videogame.prototype.getNationality = function () {
        return this.nationality;
    };
    Videogame.prototype.setNationality = function (value) {
        this.nationality = value;
    };
    Videogame.prototype.getDirector = function () {
        return this.director;
    };
    Videogame.prototype.setDirector = function (value) {
        this.director = value;
    };
    Videogame.prototype.getLanguages = function () {
        return this.languages;
    };
    Videogame.prototype.setLanguages = function (value) {
        this.languages = value;
    };
    Videogame.prototype.getPlatforms = function () {
        return this.platforms;
    };
    Videogame.prototype.setPlatforms = function (value) {
        this.platforms = value;
    };
    Videogame.prototype.getPrice = function () {
        return this.price;
    };
    Videogame.prototype.setPrice = function (value) {
        this.price = value;
    };
    Videogame.prototype.getScore = function () {
        return this.score;
    };
    Videogame.prototype.setScore = function (value) {
        this.score = value;
    };
    return Videogame;
}());
exports.Videogame = Videogame;
