"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.deleteAllPhotos = exports.deletePhoto = exports.follow = exports.obtain = exports.upload = void 0;
var Photos_1 = require("../models/Photos");
var User_1 = require("../models/User");
function upload(user, url, title, description, res) {
    var photo = new Photos_1.Photo({
        titulo: title,
        url: url,
        nombre: user,
        description: description
    });
    photo.save()
        .then(function (data) {
        res.send(data);
    })
        .catch(function (err) { console.log(err); });
}
exports.upload = upload;
function obtain(user, res) {
    Photos_1.Photo.find({ nombre: user }, function (err, data) {
        err ? res.send(err) : res.send(data);
    });
}
exports.obtain = obtain;
function follow(from, to, res) {
    User_1.User.update({ name: from }, { $addToSet: { follow: to } })
        .then(function () { res.sendStatus(200); })
        .catch(function (err) { return res.send(err); });
}
exports.follow = follow;
function deletePhoto(user, title, res) {
    Photos_1.Photo.findOneAndDelete({ nombre: user, titulo: title })
        .then(function (r) { return res.sendStatus(200); })
        .catch(function (err) { console.log(err); res.sendStatus(500); });
}
exports.deletePhoto = deletePhoto;
function deleteAllPhotos(user, res) {
    Photos_1.Photo.deleteMany({ nombre: user })
        .then(function (r) { return res.sendStatus(200); })
        .catch(function (err) { console.log(err); res.sendStatus(500); });
}
exports.deleteAllPhotos = deleteAllPhotos;
// -------------------------------------------------------------------------
function createUser(b, res) {
    var user = new User_1.User({
        login: b.login,
        Password: b.password,
        name: b.name,
        surname: b.surname,
        dateOfBirth: new Date(Date.UTC(b.year, b.month, b.day)),
        comments: b.comments,
        rol: b.rol,
        address: b.address,
        phone: b.phone,
        email: b.email,
        follow: []
    });
    user.save(function (err) {
        if (!err) {
            console.log("saved");
            res.sendStatus(201);
        }
        else {
            console.log(err);
            res.send(err);
        }
    });
}
exports.createUser = createUser;
