"use strict";
exports.__esModule = true;
exports.HobbyGame = void 0;
var fs = require("fs-extra");
var HobbyGame = /** @class */ (function () {
    function HobbyGame(games) {
        this.games = games;
    }
    HobbyGame.prototype.writeOnJSONFile = function (filename) {
        fs.writeFile('./' + filename + '.json', JSON.stringify(this.games));
    };
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
    HobbyGame.getInstance = function (name) {
        return new HobbyGame(fs.readJsonSync('./' + name + '.json'));
    };
    return HobbyGame;
}());
exports.HobbyGame = HobbyGame;
