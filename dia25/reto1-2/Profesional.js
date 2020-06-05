"use strict";
exports.__esModule = true;
exports.Professional = void 0;
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
exports.Professional = Professional;
