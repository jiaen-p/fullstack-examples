"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        var v = [];
        for (var i = 0; i < n; i++) {
            v.push(new vector_1.Vector(m, k));
        }
        this.elements = v;
    }
    Matrix.prototype.print = function () {
        console.table(this.elements);
    };
    Matrix.prototype.add = function (m1) {
        var res = new Matrix(0, 0, 0);
        var arr = [];
        var m2 = m1.getMatrix();
        for (var i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].add(m2[i]).getVector());
        }
        res.setMatrix(arr);
        return res;
    };
    Matrix.prototype.multNumber = function (n) {
        var res = new Matrix(0, 0, 0);
        var arr = [];
        for (var i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].multNumber(n).getVector());
        }
        res.setMatrix(arr);
        return res;
    };
    Matrix.prototype.multSpecial = function (n) {
        var res = new Matrix(0, 0, 0);
        var arr = [];
        var _loop_1 = function (i) {
            var m = this_1.elements[i].getVector();
            var v = [];
            m.forEach(function (el) {
                if (el % 2 === 0) {
                    v.push(el * n);
                }
                else {
                    v.push(el * (n - 1));
                }
            });
            arr.push(v);
        };
        var this_1 = this;
        for (var i = 0; i < this.elements.length; i++) {
            _loop_1(i);
        }
        res.setMatrix(arr);
        return res;
    };
    Matrix.prototype.getMatrix = function () {
        return this.elements;
    };
    Matrix.prototype.setMatrix = function (matrix) {
        var res = [];
        for (var i = 0; i < matrix.length; i++) {
            var v = new vector_1.Vector(0, 0);
            v.setVector(matrix[i]);
            res.push(v);
        }
        this.elements = res;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
