"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, wheight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNum, profession, id) {
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
        this.id = id;
    }
    Professional.prototype.print = function () {
        return ("\n        Name: " + this.name + "\n        Id: " + this.id + "\n        \n        ");
    };
    return Professional;
}());
exports.Professional = Professional;
