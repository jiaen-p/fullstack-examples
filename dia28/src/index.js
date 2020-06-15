var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/codenotch?readPreference=primary&appname=MongoDB%20Compass&ssl=false", { useNewUrlParser: true, useUnifiedTopology: true });
var userIdSchema = require('./models/UserId');
var user1 = new userIdSchema({
    login: "banan",
    password: "25sd3asd"
});
user1.save().then(function () { return console.log("se ha guardado correctamente"); }).then(userIdSchema.find({}).then(function (data) {
    console.log(data);
}));
