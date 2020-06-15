const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    login: String,
    Password: String,
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: [String],
    rol:{
        type: String,
        enum:["user", "dev", "owner"]
    },
    address: String,
    phone: Number,
    email: String,
    follow: [String]
})

// userSchema.pre('save', function(next){
//     if(this.login && this.password && this.name){
//         next()
//     } else {
//         console.log("faltan campos por rellenar")
//     }
// })

export const User = mongoose.model('User', userSchema)