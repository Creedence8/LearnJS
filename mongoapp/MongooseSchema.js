// var userScheme = new Schema({
//     name: String,
//     age: Number,
//     company: {
//         name: String,
//         employee: [String], // тип - массив строк
//         date: Date
//     }
// });
//

// var userScheme = new Schema({
//     name: {
//         type: String,
//         default: "NoName"
//     },
//     age: {
//         type: Number,
//         default: 22
//     }
// });

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb");

// установка схемы
var userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
}, { versionKey: false });
var User = mongoose.model("User", userScheme);
var user = new User({name: "Li"});

user.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user", user);
});
