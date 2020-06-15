"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var func_1 = require("../function/func");
var router = express_1.Router();
exports.router = router;
router.route("/")
    .get(function (req, res) {
    var id = req.query.id;
    func_1.timeline(id, res);
});
