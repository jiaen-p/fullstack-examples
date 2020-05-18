"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var calendar_1 = require("./calendar");
var p1 = new person_1.Person("James", 42, "Sesame st");
var p2 = new person_1.Person("Money Penny", 30, "Ice");
var c1 = new calendar_1.Calendar([p1, p2]);
c1.printCalendar();
