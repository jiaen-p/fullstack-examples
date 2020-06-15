"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeline = exports.addPhotoUser = exports.getUser = exports.createUser = exports.deleteAllPhotos = exports.deletePhoto = exports.unfollow = exports.follow = exports.obtain = exports.upload = void 0;
var Photos_1 = require("../models/Photos");
var User_1 = require("../models/User");
function upload(user, url, title, description, res) {
    var photo = new Photos_1.Photo({
        titulo: title,
        url: url,
        user: user,
        description: description
    });
    photo.save()
        .then(function (data) {
        res.send(data);
        addPhotoUser(data);
    })
        .catch(function (err) { console.log(err); });
}
exports.upload = upload;
function obtain(user, res) {
    Photos_1.Photo.find({ _id: user }, function (err, data) {
        err ? res.send(err) : res.send(data);
    });
}
exports.obtain = obtain;
function follow(from, to, res) {
    var update = { "follow": to };
    if (to) {
        User_1.User.updateOne({ _id: from }, { $addToSet: update }, { new: true })
            .then(function () { res.sendStatus(200); })
            .catch(function (err) { return res.send(err); });
    }
    else {
        res.sendStatus(400);
    }
}
exports.follow = follow;
function unfollow(from, to, res) {
    var update = { "follow": to };
    User_1.User.findByIdAndUpdate(from, { $pull: update })
        .then(function (d) { res.sendStatus(200); console.log(d); })
        .catch(function (err) { res.sendStatus(500); console.log(err); });
}
exports.unfollow = unfollow;
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
            res.sendStatus(201);
        }
        else {
            console.log(err);
            res.send(err);
        }
    });
}
exports.createUser = createUser;
function getUser(res) {
    User_1.User.find({})
        .then(function (data) { return res.send(data); })
        .catch(function (err) { return console.error(err); });
}
exports.getUser = getUser;
function addPhotoUser(data) {
    var newPhoto = { "photos": data._id };
    User_1.User.findByIdAndUpdate(data.user, { $addToSet: newPhoto }, function (err, res) {
        if (err) {
            console.error(err);
        }
    });
}
exports.addPhotoUser = addPhotoUser;
function timeline(user, res) {
    User_1.User.findById(user)
        .populate('photos')
        .exec()
        .then(function (data) {
        res.send(data.toJSON().photos);
    })
        .catch(function (err) { console.error(err); res.sendStatus(500); });
}
exports.timeline = timeline;
