"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var credentialSchema = new Schema({
    address: String,
    phone: Number,
    email: String
});
credentialSchema.pre('save', function (next) {
    if (this.address && this.phone && this.email) {
        next();
    }
    else {
        console.log("some info is missing");
    }
});
module.exports = mongoose.model('Credentials', credentialSchema);
