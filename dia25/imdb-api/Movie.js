"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, actors, releaseYear, nationality, genre, director, url, id) {
        this.title = title;
        this.actors = actors;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.director = director;
        this.url = url;
        this.id = id;
    }
    Movie.prototype.print = function () {
        var actors = '';
        this.actors.forEach(function (actor) {
            actors += actor.print();
        });
        var text = "\n    Title: " + this.title + "\n    Year released: " + this.releaseYear + "\n    Nationality: " + this.nationality + "\n    Actor: " + actors + "\n    Director: " + this.director.print() + "\n        ";
        return (text);
    };
    return Movie;
}());
exports.Movie = Movie;
