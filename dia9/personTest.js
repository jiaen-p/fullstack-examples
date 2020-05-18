"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var p1 = new person_1.Person("James", 42, "Sesame st");
p1.printName();
console.log("ha nacido en el año", p1.yearOfBirth(2020));
console.log(p1.getAddress());
p1.setAddress("nyc");
console.log(p1.getAddress());
