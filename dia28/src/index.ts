const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/codenotch?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {useNewUrlParser: true, useUnifiedTopology: true})

const userIdSchema = require('./models/UserId')
let user1 = new userIdSchema({
    login: "banan" ,
    password: "25sd3asd"
})

user1.save().then(()=> console.log("se ha guardado correctamente")).then( userIdSchema.find({}).then( (data) => {
    console.log(data)
}))