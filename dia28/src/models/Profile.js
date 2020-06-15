"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var profileSchema = new Schema({
    name: {
        String: String,
        validate: [function (p) { if (p) {
                true;
            } }, 'No name']
    },
    surname: String,
    dateOfBirth: {
        Date: Date,
        validate: [function (date) {
                var diff = Date.now() - date;
                var age = Math.abs(new Date(diff).getFullYear() - 1970);
                return age > 21;
            }, 'Not old enough']
    },
    comments: String,
    rol: {
        type: String,
        "enum": ["user", "dev", "pro-user"]
    }
});
module.exports = mongoose.model('Profile', profileSchema);
