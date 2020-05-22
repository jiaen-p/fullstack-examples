"use strict";
exports.__esModule = true;
exports.Person = void 0;
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
    return Person;
}());
exports.Person = Person;
