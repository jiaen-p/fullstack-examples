"use strict";
exports.__esModule = true;
exports.Calendar = void 0;
var Calendar = /** @class */ (function () {
    function Calendar(people) {
        this.people = people;
    }
    Calendar.prototype.printCalendar = function () {
        this.people.forEach(function (people) {
            people.printName();
            console.log("Vive en", people.getAddress());
            console.log("Ha nacido en el año", people.yearOfBirth(2020));
        });
    };
    return Calendar;
}());
exports.Calendar = Calendar;
