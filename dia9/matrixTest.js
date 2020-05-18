"use strict";
exports.__esModule = true;
var matrix_1 = require("./matrix");
var m1 = new matrix_1.Matrix(3, 3, 2);
var m2 = new matrix_1.Matrix(3, 3, 1);
m1.print();
m1.multSpecial(3).print();
m2.print();
m1.add(m2).print();
