"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userIdSchema = new Schema({
    login: {
        type: String
    },
    password: {
        type: String,
        validate: [function (p) { return p.length >= 6; }, 'Not long enough']
    }
});
userIdSchema.pre('save', function (next) {
    console.log(this.login);
    if (this.login) {
        console.log("Correcto");
        next();
    }
    else {
        console.log("login empty");
    }
});
module.exports = mongoose.model('UserId', userIdSchema);
