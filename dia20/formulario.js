var Movie = /** @class */ (function () {
    function Movie(title, actors, releaseYear, nationality, genre, director, url) {
        this.title = title;
        this.actors = actors;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.director = director;
        this.url = url;
    }
    Movie.prototype.print = function () {
        var text = "\n        Title: " + this.title + "\n        Year released: " + this.releaseYear + "\n        Nationality: " + this.nationality + "\n        Actor: : " + this.actors.forEach(function (actor) { return actor.print(); }) + "\n        Director: " + this.director.print() + "\n        Writer: " + this.writer.print() + "\n        Language: " + this.language + "\n        Platform: " + this.platform + "\n        Is it MCU: " + this.isMCU + "\n        Main character name: " + this.mainCharacterName + "\n        Producer: " + this.producer + "\n        Distrubuted by: " + this.distributor + "\n        ";
        console.log(text);
    };
    return Movie;
}());
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.toJSON = function () {
        var json = { 'peliculas': this.peliculas };
        return json;
    };
    return Imdb;
}());
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, wheight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNum, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.wheight = wheight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNum = oscarsNum;
        this.profession = profession;
    }
    Professional.prototype.print = function () {
        return this;
    };
    return Professional;
}());
// --------------------------------
var actors = [];
function pusha() {
    var actor = new Professional($("#actorName").val(), $("#actorAge").val(), $("#actorGender").val(), $("#actorWeight").val(), $("#actorHeight").val(), $("#actorHairColor").val(), $("#actorEyeColor").val(), $("#actorRace").val(), $("#actorIsRetired").val() === "yes", $("#actorNationality").val(), $("#actorNumOsc").val(), "Actor");
    actors.push(actor);
    $("#actorName").val('');
    $("#actorAge").val(NaN);
    $("#actorGender").val('');
    $("#actorWeight").val(NaN);
    $("#actorHeight").val(NaN);
    $("#actorHairColor").val('');
    $("#actorEyeColor").val('');
    $("#actorRace").val('');
    $("#actorNationality").val('');
    $("#actorNumOsc").val(NaN);
}
function adda() {
    pusha();
    var director = new Professional($("#directorName").val(), $("#directorAge").val(), $("#directorGender").val(), $("#directorWeight").val(), $("#directorHeight").val(), $("#directorHairColor").val(), $("#directorEyeColor").val(), $("#directorRace").val(), $("#directorIsRetired").val() === "yes", $("#directorNationality").val(), $("#directorNumOsc").val(), "director");
    var movie = new Movie($("#movieTitle").val(), actors, $("#releaseYear").val(), $("#nationality").val(), $("#genre").val(), director, $("#url").val());
    // imdb.peliculas.push(movie) ------------------> guardar pelicula en window.localStorage
    localStorage.setItem("newPelicula", JSON.stringify(movie));
    console.log(localStorage.getItem("newPelicula"));
    $("#directorName").val('');
    $("#directorAge").val(null);
    $("#directorGender").val('');
    $("#directorWeight").val(null);
    $("#directorHeight").val(null);
    $("#directorHairColor").val('');
    $("#directorEyeColor").val('');
    $("#directorRace").val('');
    $("#directorNationality").val('');
    $("#directorNumOsc").val(null);
    $("#movieTitle").val('');
    $("#releaseYear").val(null);
    $("#nationality").val('');
    $("#genre").val('');
    $("#url").val('');
}
