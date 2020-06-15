export {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userIdSchema = new Schema({
    login: {
        type: String
    },
    password: {
        type: String,
        validate: [ (p) => {return p.length >= 6}, 'Not long enough']
    }
})
userIdSchema.pre('save', function (next){
    console.log(this.login)
    if(this.login){
        console.log("Correcto")
        next()
    } else {
        console.log("login empty")
    }
})




module.exports = mongoose.model('UserId', userIdSchema)
