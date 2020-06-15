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
    var user = req.query.user;
    func_1.obtain(user, res);
})
    .post(function (req, res) {
    var q = req.body;
    func_1.upload(q.user, q.url, q.title, q.description, res);
})
    .put(function (req, res) {
    var q = req.query;
    func_1.follow(q.from, q.to, res);
})
    .delete(function (req, res) {
    var user = req.query.user;
    var title = req.query.title;
    title ? func_1.deletePhoto(user, title, res) : func_1.deleteAllPhotos(user, res);
});
