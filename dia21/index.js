var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var profession;
(function (profession) {
    profession["developer"] = "developer";
    profession["tester"] = "tester";
    profession["manager"] = "manager";
    profession["director"] = "director";
})(profession || (profession = {}));
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }
    Person.prototype.samePerson = function (p) {
        return this.name === p.getName() && this.nationality === p.getNationality() && this.profession === p.getProfession() && this.experienceYears === p.getExperienceYears();
    };
    Person.prototype.print = function () {
        console.log("\n        Nombre: " + this.name + "\n        Nacionalidad: " + this.nationality + "\n        Profesion: " + this.profession + "\n        A\u00F1os de experiencia: " + this.experienceYears + "\n        ");
    };
    Person.prototype.toString = function () {
        var s = '';
        s = this.name + ' ' + this.nationality + ' ' + this.profession + ' ' + this.experienceYears + ' ';
        return s;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (experienceYears) {
        this.experienceYears = experienceYears;
    };
    Person.Instance = function (json) {
        return new Person(json.name, json.nationality, json.profession, json.experienceYears);
    };
    return Person;
}());
// ---------------------------------------------------------------------------------------
var StorageDevice;
(function (StorageDevice) {
    StorageDevice["dvd"] = "dvd";
    StorageDevice["cartucho"] = "cartucho";
    StorageDevice["tarjeta"] = "tarjeta";
    StorageDevice["cd"] = "cd";
    StorageDevice["bluray"] = "bluray";
})(StorageDevice || (StorageDevice = {}));
var Platform = /** @class */ (function () {
    function Platform(name, releaseYear, company, nBits, generation, hasHD, hdSize, hasInternetConnection, storageDevice, color) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.company = company;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
    Platform.prototype.samePlatform = function (p) {
        return this.name === p.name && this.releaseYear === p.releaseYear && this.company === p.company
            && this.nBits === p.nBits && this.generation === p.generation && this.hasHD === p.hasHD &&
            this.hdSize === p.hdSize && this.hasInternetConnection === p.hasInternetConnection
            && this.storageDevice === p.storageDevice && this.color === p.color;
    };
    Platform.prototype.print = function () {
        console.log(this.toString());
    };
    Platform.prototype.toString = function () {
        return ("\n        Name: " + this.name + "\n        Year released: " + this.releaseYear + "\n        Company: " + this.company + "\n        Number of bits: " + this.nBits + "\n        Generation: " + this.generation + "\n        Has HD: " + this.hasHD + "\n        HD size(GB): " + this.hdSize + "\n        Has Internet Connection: " + this.hasInternetConnection + "\n        Type of storage: " + this.storageDevice + "\n        Color: " + this.color + "\n        ");
    };
    Platform.prototype.getName = function () {
        return this.name;
    };
    Platform.prototype.setName = function (name) {
        this.name = name;
    };
    Platform.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Platform.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Platform.prototype.getCompany = function () {
        return this.company;
    };
    Platform.prototype.setCompany = function (company) {
        this.company = company;
    };
    Platform.prototype.getNBits = function () {
        return this.nBits;
    };
    Platform.prototype.setNBits = function (nBits) {
        this.nBits = nBits;
    };
    Platform.prototype.getGeneration = function () {
        return this.generation;
    };
    Platform.prototype.setGeneration = function (generation) {
        this.generation = generation;
    };
    Platform.prototype.getHasHD = function () {
        return this.hasHD;
    };
    Platform.prototype.setHasHD = function (hasHD) {
        this.hasHD = hasHD;
    };
    Platform.prototype.getHdSize = function () {
        return this.hdSize;
    };
    Platform.prototype.setHdSize = function (hdSize) {
        this.hdSize = hdSize;
    };
    Platform.prototype.getHasInternetConnection = function () {
        return this.hasInternetConnection;
    };
    Platform.prototype.setHasInternetConnection = function (hasInternetConnection) {
        this.hasInternetConnection = hasInternetConnection;
    };
    Platform.prototype.getStorageDevice = function () {
        return this.storageDevice;
    };
    Platform.prototype.setStorageDevice = function (storageDevice) {
        this.storageDevice = storageDevice;
    };
    Platform.prototype.getColor = function () {
        return this.color;
    };
    Platform.prototype.setColor = function (color) {
        this.color = color;
    };
    return Platform;
}());
var Videogame = /** @class */ (function () {
    function Videogame(title, releaseYear, developers, nationality, director, languages, platforms, price, score, url) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.developers = developers;
        this.nationality = nationality;
        this.director = director;
        this.languages = languages;
        this.platforms = platforms;
        this.price = price;
        this.score = score;
        this.url = url;
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
    Videogame.prototype.getUrl = function () {
        return this.url;
    };
    Videogame.prototype.setUrl = function (url) {
        this.url = url;
    };
    return Videogame;
}());
// ---------------------------------------------------------------------------------------
var HobbyGame = /** @class */ (function () {
    function HobbyGame(games) {
        this.games = games;
    }
    HobbyGame.prototype.toJson = function () {
        return { "Games": this.games };
    };
    HobbyGame.prototype.allGamesPriceFrom = function (p) {
        var total = 0;
        this.games.forEach(function (game) {
            if (game.availableInPlatform(p)) {
                total += game.getPrice();
            }
        });
        return total;
    };
    HobbyGame.prototype.allGamesPrice = function () {
        var total = 0;
        this.games.forEach(function (game) {
            total += game.getPrice();
        });
        return total;
    };
    HobbyGame.prototype.allGamesInLanguage = function (language) {
        var games = [];
        this.games.forEach(function (game) {
            if (game.availableInLanguage(language)) {
                games.push(game);
            }
        });
        return games;
    };
    HobbyGame.prototype.allGamesDevelopedBy = function (dev) {
        var games = [];
        this.games.forEach(function (game) {
            if (game.developedBy(dev)) {
                games.push(game);
            }
        });
        return games;
    };
    HobbyGame.prototype.allGamesAvailableForPlatformAndInLanguague = function (p, language) {
        var games = [];
        this.games.forEach(function (game) {
            if (game.availableInLanguage(language) && game.availableInPlatform(p)) {
                games.push(game);
            }
        });
        return games;
    };
    HobbyGame.prototype.allGamesAvailableForPlatformAndInLanguagueAndGreterThanFive = function (p, language) {
        var games = [];
        this.games.forEach(function (game) {
            if (game.availableInLanguage(language) && game.availableInPlatform(p) && game.getScore() > 5) {
                games.push(game);
            }
        });
        return games;
    };
    HobbyGame.prototype.getGames = function () {
        return this.games;
    };
    HobbyGame.prototype.setGames = function (value) {
        this.games = value;
    };
    return HobbyGame;
}());
// ---------------------------------------------------------------------------------------
var p1 = new Person("Juan", "Español", "developer", 15);
var p2 = new Person("Pablo", "Español", "developer", 10);
var p3 = new Person("Juana", "Francesa", "developer", 20);
var d1 = new Person("Nana", "UK", "director", 5);
var pcmr = new Platform("PC", 2020, "Any", 64, 10, true, 100, true, "cd", "gris");
var ps4 = new Platform("ps4", 2015, "sony", 64, 4, true, 120, true, "bluray", "black");
var sw = new Platform("Switch", 2016, "Nintendo", 64, 4, true, 32, true, "tarjeta", "negro");
var tk = new Videogame("tekken 7", 2018, [p1, p2], "Japan", d1, ["English", "Spanish", "Japanese"], [ps4, pcmr, sw], 40, 8, "https://cdn.gamefy.store/media/__sized__/product_image/vert_cover/Tekken-7-HD-Wallpapers-whb-crop-c0-5__0-5-636x700-85.jpg");
var re = new Videogame("residen evil", 2020, [p1, p3], "Japan", d1, ["Russian", "Japanese", "Polska", "English"], [ps4, sw], 60, 4, "https://www.residentevil.net/pc/img/top/bnr_campaign_en.jpg");
var mk = new Videogame("Mario Kart 8", 2017, [p2, p3], "Japan", d1, ["English", "Spanish", "Portuguese", "French"], [sw], 50, 7, "https://s3.gaming-cdn.com/images/products/2615/orig/mario-kart-8-deluxe-switch-cover.jpg");
var store = new HobbyGame([tk, mk, re]);
// ---------------------------------------------------------------------------------------
var cart = [];
$(document).ready(function () {
    $("#page").html(Home());
    $("#itemNumber").html("0");
    carts();
    $("#Home").click(function () {
        $("#page").html(Home());
    });
    $("#Store").click(function () {
        $("#page").html(Buy());
    });
    $("#AddGame").click(function () {
        $("#page").html(AddGame());
    });
});
function buyGame(index) {
    cart.push(index);
    $("#itemNumber").html("" + cart.length);
    carts();
}
function carts() {
    var carts = '';
    var total = 0;
    cart.forEach(function (i) {
        total += store.getGames()[i].getPrice();
        carts += "\n        <div class=\"dropdown-item \" href=\"#\">\n            <p>" + store.getGames()[i].getTitle() + " - " + store.getGames()[i].getPrice() + "\u20AC</p>\n        </div>\n        ";
    });
    carts += "\n        <div class=\"dropdown-divider\"></div>\n        <div class=\"dropdown-item \" href=\"#\">\n            <p>Total - " + total + "\u20AC</p>\n        </div>\n    ";
    $("#cart").html(carts);
}
function Home() {
    var games = '';
    store.getGames().forEach(function (game, index) {
        var developerName = '';
        game.getDevelopers().forEach(function (dev) {
            developerName += "\n            <li>" + dev.getName() + "</li>\n            ";
        });
        var lang = '';
        game.getLanguages().forEach(function (language) {
            lang += "\n                <li>" + language + "</li>\n            ";
        });
        var plat = '';
        game.getPlatforms().forEach(function (platform) {
            plat += "\n                <li>" + platform.getName() + " - " + platform.getCompany() + "</li>\n            ";
        });
        games += "\n        <div class=\"card col-12 col-md-6 col-lg-4 col-xl-3\">\n            <img src=" + game.getUrl() + " class=\"card-img-top\" alt=\"" + game.getTitle() + "\">\n            <div class=\"card-body\">\n                <h4 class=\"card-text\">Title: " + game.getTitle() + "</h4>\n                <p class=\"card-text\">Year released: " + game.getReleaseYear() + "</p>\n                <p class=\"card-text\">Game director: " + game.getDirector().getName() + "</p>\n                <p class=\"card-text\">Game developers: \n                    <ul>\n                        " + developerName + "    \n                    </ul>\n                </p>\n                <p class=\"card-text\">Available languages:\n                    <ul>\n                        " + lang + "\n                    </ul>\n                </p>\n                <p class=\"card-text\">Available platforms: \n                    <ul>\n                        " + plat + "\n                    </ul>\n                </p>\n                <p class=\"card-text\">Score: " + game.getScore() + "/10</p>\n            </div>\n        </div>\n        \n        ";
    });
    var htmlString = "\n    <div class=\"title\">\n        <h1>Hobby game wiki</h1>\n        <h3>Game info</h3>\n    </div>\n    <div class=\"games row\">\n        " + games + "\n    </div>\n    ";
    return htmlString;
}
function Buy() {
    var games = '';
    store.getGames().forEach(function (game, index) {
        games += "\n        <div class=\"card col-12 col-md-6 col-lg-4 col-xl-3\">\n            <img src=" + game.getUrl() + " class=\"card-img-top\" alt=\"" + game.getTitle() + "\">\n            <div class=\"card-body\">\n                <h4 class=\"card-text\">" + game.getTitle() + "</h4>\n                <p class=\"card-text\">" + game.getReleaseYear() + "</p>\n                <p class=\"card-text\">" + game.getPrice() + "\u20AC</p>\n                <button onclick=buyGame(" + index + ") class=\"btn btn-primary\">Buy</button>\n            </div>\n        </div>\n        \n        ";
    });
    var htmlString = "\n    <div class=\"title\">\n        <h1>Hobby game store</h1>\n        <h3>You can find you favorite games for a great price.</h3>\n    </div>\n    <div class=\"games row\">\n        " + games + "\n    </div>\n    ";
    return htmlString;
}
var languages = [];
function addLang() {
    var lan = '';
    languages.push($("#gamLang").val());
    $("#gamLang").val('');
    languages.forEach(function (lang) {
        lan += "<li>" + lang + "</li>";
    });
    $("#addLanguage").html("" + lan);
    $("#gamLang").focus();
}
var developers = [];
function addDev() {
    developers.push(new Person($("#devName").val(), $("#devCountry").val(), "developer", $("#devYears").val()));
    $("#devName").val('');
    $("#devCountry").val('');
    $("#devYears").val(null);
    var dev = '';
    developers.forEach(function (d) {
        dev += "<li>" + d.getName() + "</li>";
    });
    $("#addDeveloper").html(dev);
}
function AddGame() {
    return ("\n    <form>\n            <br>\n            <div class=\"form-row\">\n                <div class=\" col-sm-12 col-md-3\">\n                    <input required type=\"text\" id=\"gamTitle\" class=\"form-control\" placeholder=\"Game Title\">\n                </div>\n                <div class=\" col-sm-12 col-md-3\">\n                    <input required type=\"number\" id=\"gamYear\" class=\"form-control\" placeholder=\"Year of Release\">\n                </div>\n                <div class=\" col-sm-12 col-md-3\">\n                    <input required type=\"text\" id=\"gamCountry\" class=\"form-control\" placeholder=\"Country of Origin\">\n                </div>\n                <div class=\" col-sm-12 col-md-3\">\n                    <input required type=\"text\" id=\"gamUrl\" class=\"form-control\" placeholder=\"Img Url\">\n                </div>\n            </div>\n            <br>\n            <div class=\"form-row\">\n                <div class=\"col-sm-12 col-md-3\">\n                    <input required type=\"number\" id=\"gamScore\" class=\"form-control\" placeholder=\"Game Score (0-10)\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input required type=\"number\" id=\"gamPrice\" class=\"form-control\" placeholder=\"Price\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"text\" id=\"gamLang\" class=\"form-control\" placeholder=\"Language\">\n                </div>\n                <button onclick=addLang() class=\"btn btn-primary\">Add Language</button>\n            </div>\n            <br>\n            <div>\n                <p>Languagues already added:</p>\n                <ul id=\"addLanguage\">\n                   none \n                </ul>\n            </div>\n            <hr>\n            <p class=\"form-check form-check-inline\">Available in platforms:</p>\n            <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"ps4\">\n                <label class=\"form-check-label\" for=\"inlineCheckbox1\">ps4</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"sw\">\n                <label class=\"form-check-label\" for=\"inlineCheckbox2\">switch</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"pcmr\">\n                <label class=\"form-check-label\" for=\"inlineCheckbox3\">pc</label>\n            </div>\n            <hr>\n            <div class=\"form-row\">\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"text\" id=\"dirName\" class=\"form-control\" placeholder=\"Director Name\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"number\" id=\"dirYears\" class=\"form-control\" placeholder=\"Year of Experience\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"text\" id=\"dirCountry\" class=\"form-control\" placeholder=\"Country of Origin\">\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-row\">\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"text\" id=\"devName\" class=\"form-control\" placeholder=\"Developer Name\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"number\" id=\"devYears\" class=\"form-control\" placeholder=\"Year of Experience\">\n                </div>\n                <div class=\"col-sm-12 col-md-3\">\n                    <input type=\"text\" id=\"devCountry\" class=\"form-control\" placeholder=\"Country of Origin\">\n                </div>\n                <button onclick=addDev() class=\"btn btn-primary\">Add developer</button>\n            </div>\n            <br>\n            <div>\n                <p>Added developers name:</p>\n                <ul id=\"addDeveloper\">\n                    none\n                </ul>\n            </div>\n            <hr>\n            \n            <button onclick=addGame() type=\"reset\" class=\"btn btn-primary\">Submit</button>\n        </form>\n    \n    ");
}
function addGame() {
    if ($("#gamTitle").val() !== '') {
        var platform = [];
        if ($("#ps4").is(":checked")) {
            platform.push(ps4);
        }
        if ($("#sw").is(":checked")) {
            platform.push(sw);
        }
        if ($("#pcmr").is(":checked")) {
            platform.push(pcmr);
        }
        var videogame = new Videogame($("#gamTitle").val(), Number($("#gamYear").val()), developers, $("#gamCountry").val(), new Person($("#dirName").val(), $("#dirCountry").val(), "director", $("#dirYears").val()), languages, platform, Number($("#gamPrice").val()), Number($("#gamScore").val()), $("#gamUrl").val());
        if ($("#devName").val() !== '') {
            developers.push(new Person($("#devName").val(), $("#devCountry").val(), "developer", Number($("#devYears").val())));
        }
        console.log(videogame.getPrice());
        store.setGames(__spreadArrays(store.getGames(), [videogame]));
    }
}
