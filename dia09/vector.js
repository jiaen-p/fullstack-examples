"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var v = [];
        for (var i = 0; i < n; i++) {
            v.push(Math.floor(Math.random() * (k + 1)));
        }
        this.elemets = v;
    }
    Vector.prototype.print = function () {
        console.log(this.elemets);
    };
    Vector.prototype.add = function (v1) {
        var v2 = v1.getVector();
        var v = [];
        var res = new Vector(0, 0);
        for (var i = 0; i < this.elemets.length; i++) {
            v.push(this.elemets[i] + v2[i]);
        }
        res.setVector(v);
        return res;
    };
    Vector.prototype.subs = function (v1) {
        var v2 = v1.getVector();
        var v = [];
        var res = new Vector(0, 0);
        for (var i = 0; i < this.elemets.length; i++) {
            v.push(this.elemets[i] - v2[i]);
        }
        res.setVector(v);
        return res;
    };
    Vector.prototype.mult = function (v1) {
        var v2 = v1.getVector();
        var res = new Vector(0, 0);
        res.setVector([
            this.elemets[1] * v2[2] - this.elemets[2] * v2[1],
            this.elemets[2] * v2[0] - this.elemets[0] * v2[2],
            this.elemets[0] * v2[1] - this.elemets[1] * v2[0]
        ]);
        return res;
    };
    Vector.prototype.multNumber = function (n) {
        var v = [];
        var res = new Vector(0, 0);
        this.elemets.forEach(function (element) {
            v.push(n * element);
        });
        res.setVector(v);
        return res;
    };
    Vector.prototype.getVector = function () {
        return this.elemets;
    };
    Vector.prototype.setVector = function (vector) {
        this.elemets = vector;
    };
    return Vector;
}());
exports.Vector = Vector;
