export {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const credentialSchema = new Schema({
    address: String,
    phone: Number,
    email: String
})

credentialSchema.pre('save', function(next){
    if(this.address && this.phone && this.email){
        next()
    } else {
        console.log("some info is missing")
    }
})



module.exports = mongoose.model('Credentials', credentialSchema)