"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, actors, releaseYear, nationality, genre, director, writer, url, id) {
        this.title = title;
        this.actors = actors;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.director = director;
        this.writer = writer;
        this.url = url;
        this.id = id;
    }
    Movie.prototype.print = function () {
        var actors = '';
        this.actors.forEach(function (actor) {
            actors += "\n            Name: " + actor.name + "\n            Id: " + actor.id;
        });
        var text = "\n    Title: " + this.title + "\n    Year released: " + this.releaseYear + "\n    Nationality: " + this.nationality + "\n    Actor: " + actors + "\n    Director: \n        Name: " + this.director.name + "\n        Id: " + this.director.id;
        return (text);
    };
    Movie.prototype.toJson = function () {
        return this;
    };
    Movie.instance = function () {
        return new Movie(null, null, null, null, null, null, null, null, null);
    };
    return Movie;
}());
exports.Movie = Movie;
