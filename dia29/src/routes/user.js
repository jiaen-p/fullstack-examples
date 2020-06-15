"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
require("../function/func");
var func_1 = require("../function/func");
var router = express_1.Router();
exports.router = router;
router.route("/")
    .get(function (req, res) {
})
    .post(function (req, res) {
    func_1.createUser(req.body, res);
});
