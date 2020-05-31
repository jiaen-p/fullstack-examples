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
var alex = new Professional('alex', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
var jiaen = new Professional('jiaen', 28, 'masc', 76, 186, 'black', 'brown', 'asiatic', false, 'spanish', 3, 'b-ball coach');
var mmm = new Professional('mmm', 28, 'masc', 76, 183, 'brown', 'brown', 'european', true, 'spanish', 0, 'b-ball coach');
var m1 = new Movie("Infinity War", [jiaen, alex], 2018, "USA", "Action", mmm, "https://lumiere-a.akamaihd.net/v1/images/eu_avr-3_showcase_hero_v2_m_5acaf64a.jpeg?region=0,0,750,668");
var m2 = new Movie("Guns Akimbo", [alex], 2020, "UK, New Zealand and West Germany", "Comedy and Action", mmm, "https://m.media-amazon.com/images/M/MV5BNzU3ZTI1OTktNjVkNy00OWEzLWIyNzAtMWQ5YjRkZDU1ZjAxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg");
var imdb = new Imdb([m1, m2]);
$(document).ready(function () {
    $("#page").append(function () {
        $("#home").addClass("active");
        return Home();
    });
    $("#home").click(function () {
        $("#movies").removeClass("active");
        $("#contribute").removeClass("active");
        $("#home").addClass("active");
        $("#page").html(Home());
    });
    $("#movies").click(function () {
        $("#home").removeClass("active");
        $("#contribute").removeClass("active");
        $("#movies").addClass("active");
        $("#page").html(Movies());
    });
    $("#contribute").click(function () {
        $("#home").removeClass("active");
        $("#movies").removeClass("active");
        $("#contribute").addClass("active");
        $("#page").html(Contribute());
    });
    $("#contribute-home").click(function () {
        $("#home").removeClass("active");
        $("#movies").removeClass("active");
        $("#contribute").addClass("active");
        $("#page").html(Contribute());
    });
});
function Home() {
    return ("\n    <div class=\"row\">\n        <div class=\"col card \">\n            <h1 class=\"display-4\">Welcome to the film database!</h1>\n            <p class=\"lead\">All the info you need in one place</p>\n            <hr class=\"my-4\">\n            <p>If you would like to add more movies, you can help by clicking the button bellow</p>\n            <p class=\"lead\">\n                <a onclick=contribute() class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\"><i class=\"fas fa-plus\"></i> Add to our database</a>\n            </p>\n        </div>\n    </div>\n    ");
}
function Movies() {
    var html = '';
    imdb.peliculas.forEach(function (pelicula) {
        var actorsInfo = '';
        pelicula.actors.forEach(function (actor) {
            actorsInfo += "\n            <li>" + actor.name + "</li>\n            ";
        });
        html += "\n        <div class=\"card col-md-6 col-sm-12\">\n            <img src=\"" + pelicula.url + "\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + pelicula.title + "</h5>\n                <p class=\"card-text\">Director: " + pelicula.director.name + "</p>\n                <p class=\"card-text\">Nationality: " + pelicula.nationality + "</p>\n                <p class=\"card-text\">Release Year: " + pelicula.releaseYear + "</p>\n                <p class=\"card-text\">Genre: " + pelicula.genre + "</p>\n                <p class=\"card-text\">Actors:</p>\n                <ul class=\"\">" + actorsInfo + "</ul>\n            </div>\n        </div>\n        ";
    });
    return ("<div class='row'> " + html + "</div>");
}
function Contribute() {
    return ("\n    <form>\n        <div class=\"form-group\">\n            <label for=\"movieTitle\">Movie Title</label>\n            <input type=\"email\" class=\"form-control\" id=\"movieTitle\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"releaseYear\">Year released</label>\n            <input type=\"number\" class=\"form-control\" id=\"releaseYear\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"nationality\">Nationality</label>\n            <input type=\"text\" class=\"form-control\" id=\"nationality\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"genre\">Genre</label>\n            <input type=\"text\" class=\"form-control\" id=\"genre\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"url\">Image url</label>\n            <input type=\"text\" class=\"form-control\" id=\"url\">\n        </div>\n        <br>\n        <hr>\n        <br>\n        <div class=\"form-group\">\n            <label for=\"directorName\">Director name</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorName\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorAge\">Director age</label>\n            <input type=\"number\" class=\"form-control\" id=\"directorAge\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorGender\">Director gender</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorGender\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorWeight\">Director weight</label>\n            <input type=\"number\" class=\"form-control\" id=\"directorWeight\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorHeight\">Director height</label>\n            <input type=\"number\" class=\"form-control\" id=\"directorHeight\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorHairColor\">Director hair color</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorHairColor\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorEyeColor\">Director eye color</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorEyeColor\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorRace\">Director race</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorRace\">\n        </div>\n        <label for=\"directorIsRetired\">Director retired</label>\n        <div class=\"form-group\" id=\"directorIsRetired\">\n            <select type=\"text\" class=\"form-control\" id=\"directorIsRetired\">\n            <option>no</option>    \n            <option>yes</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorNationality\">Director nationality</label>\n            <input type=\"text\" class=\"form-control\" id=\"directorNationality\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"directorNumOsc\">Director number of Oscars won</label>\n            <input type=\"number\" class=\"form-control\" id=\"directorNumOsc\">\n        </div>\n        <br>\n        <hr>\n        <br>\n        <form id=\"actor-form\">\n            <div class=\"form-group\">\n                <label for=\"actorName\">actor name</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorName\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorAge\">actor age</label>\n                <input type=\"number\" class=\"form-control\" id=\"actorAge\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorGender\">actor gender</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorGender\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorWeight\">actor weight</label>\n                <input type=\"number\" class=\"form-control\" id=\"actorWeight\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorHeight\">actor height</label>\n                <input type=\"number\" class=\"form-control\" id=\"actorHeight\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorHairColor\">actor hair color</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorHairColor\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorEyeColor\">actor eye color</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorEyeColor\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorRace\">actor race</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorRace\">\n            </div>\n            <label for=\"actorIsRetired\">actor retired</label>\n            <div class=\"form-group\" id=\"actorIsRetired\">\n                <select type=\"text\" class=\"form-control\" id=\"actorIsRetired\">\n                    <option>no</option>    \n                    <option>yes</option>\n                </select>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorNationality\">actor nationality</label>\n                <input type=\"text\" class=\"form-control\" id=\"actorNationality\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"actorNumOsc\">actor number of Oscars won</label>\n                <input type=\"number\" class=\"form-control\" id=\"actorNumOsc\">\n            </div>\n            <button id=\"add-actor\" onclick=pushActor() type=\"button\" class=\"btn btn-primary\">Add Another Actor</button>\n        </form>\n        <br>\n        <hr>\n        <br>\n        <button id=\"add-movie\" onclick=addMovie() type=\"button\" class=\"btn btn-primary\">Submit Movie</button>\n    </form>\n    \n    ");
}
function contribute() {
    $("#home").removeClass("active");
    $("#movies").removeClass("active");
    $("#contribute").addClass("active");
    $("#page").html(Contribute());
}
// --------------------------------
// form logic
var actorArray = [];
function pushActor() {
    var actor = new Professional($("#actorName").val(), $("#actorAge").val(), $("#actorGender").val(), $("#actorWeight").val(), $("#actorHeight").val(), $("#actorHairColor").val(), $("#actorEyeColor").val(), $("#actorRace").val(), $("#actorIsRetired").val() === "yes", $("#actorNationality").val(), $("#actorNumOsc").val(), "Actor");
    actorArray.push(actor);
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
function addMovie() {
    pushActor();
    var director = new Professional($("#directorName").val(), $("#directorAge").val(), $("#directorGender").val(), $("#directorWeight").val(), $("#directorHeight").val(), $("#directorHairColor").val(), $("#directorEyeColor").val(), $("#directorRace").val(), $("#directorIsRetired").val() === "yes", $("#directorNationality").val(), $("#directorNumOsc").val(), "director");
    var movie = new Movie($("#movieTitle").val(), actorArray, $("#releaseYear").val(), $("#nationality").val(), $("#genre").val(), director, $("#url").val());
    imdb.peliculas.push(movie);
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
