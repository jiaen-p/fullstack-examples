"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    login: String,
    Password: String,
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: [String],
    rol: {
        type: String,
        enum: ["user", "dev", "owner"]
    },
    address: String,
    phone: Number,
    email: String,
    follow: [String]
});
// userSchema.pre('save', function(next){
//     if(this.login && this.password && this.name){
//         next()
//     } else {
//         console.log("faltan campos por rellenar")
//     }
// })
exports.User = mongoose.model('User', userSchema);
