"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var p1 = new Person_1.Person("Juan", "Español", "manager", 15);
var p2 = new Person_1.Person("Pedro", "Español", "manager", 15);
console.log(p1.samePerson(p2));
p1.print();
console.log(p2.toString());
console.log(p1.getName() + '\n' + p1.getNationality() + '\n' + p1.getProfession() + '\n' + p1.getExperienceYears());
