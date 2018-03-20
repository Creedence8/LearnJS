var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// для работы с promise
mongoose.Promise = global.Promise;

// установка схемы
var userScheme = new Schema({
    name: String,
    age: Number
});

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb");

var User = mongoose.model("User", userScheme);
var user = new User({
    name: "Bill",
    age: 41
});

// user.save(function(err){
//     mongoose.disconnect();  // отключение от базы данных
//
//     if(err) return console.log(err);
//     console.log("Сохранен объект", user);
// });

user.save()
.then(function(doc){
    console.log("Сохранен объект", doc);
    mongoose.disconnect();  // отключение от базы данных
})
.catch(function (err){
    console.log(err);
    mongoose.disconnect();
});

// User.create():
// User.create({name: "Tom", age: 34}, function(err, doc){
//     mongoose.disconnect();
//
//     if(err) return console.log(err);
//
//     console.log("Сохранен объект user", doc);
// });

// Получение данных

// find()
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/usersdb");

var userScheme = new Schema({name: String, age: Number}, {versionKey: false});
var User = mongoose.model("User", userScheme);

User.find({name: "Tom"}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});

findOne()
User.findOne({name: "Tom"}, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(doc);
});

// findById()
var id = "588a0f8c9151d23ce47bf98d";
User.findById(id, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(doc);
});

// Удаление данных

// remove()
User.remove({age:33}, function(err, result){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(result);
});

// findOneAndRemove()
User.findOneAndRemove({name:"Bill"}, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Удален пользователь ", doc);
});

// findByIdAndRemove()
var id = "588a0f8c9151d23ce47bf98d";
User.findByIdAndRemove(id, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Удален пользователь ", doc);
});

// Изменение данных

// update()
User.update({name: "Tom"}, {name: "Tom Smith"}, function(err, result){

    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(result);
});

// findByIdAndUpdate()
var id = "588b2d6fc7d95503980ecf99";
User.findByIdAndUpdate(id, {name: "Bilbo Baggins", age: 111}, {new: true}, function(err, user){

    mongoose.disconnect();
    if(err) return console.log(err);
    console.log("Обновленный объект", user);
});
