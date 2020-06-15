export{}
const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const profileSchema = new Schema({
    name: {
        String,
        validate: [(p)=> {if(p){true}}, 'No name']
    },
    surname: String,
    dateOfBirth: {
        Date,
        validate: [(date)=> {
            let diff:number = Date.now() - date
            let age:number = Math.abs(new Date(diff).getFullYear() - 1970)
            return age > 21
        }, 'Not old enough']
    },
    comments: String,
    rol:{
        type: String,
        enum: ["user", "dev", "pro-user"]
    }
})

module.exports = mongoose.model('Profile', profileSchema)

