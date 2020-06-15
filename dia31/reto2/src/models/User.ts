import mongoose, { Schema } from 'mongoose'
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
    follow: [{ type: Schema.Types.ObjectId, ref:'User'}],
    photos: [{
        type: Schema.Types.ObjectId,
        ref: 'Photo'
    }]
})

userSchema.pre('save', function(next){
    if(this.toJSON().login && this.toJSON().Password && this.toJSON().name){
        next()
    } else {
        console.log("faltan campos por rellenar")
    }
})

export const User = mongoose.model('User', userSchema)