var mongoose = require("mongoose");
var userScheme = require('./model.js');
var Schema = mongoose.Schema;
// для работы с promise
mongoose.Promise = global.Promise;

var User = mongoose.model("User", userScheme);

// подключение
module.exports.setUpConnection = function () {
    mongoose.connect("mongodb://localhost:27017/usersdb");
}

// отключение от базы данных
module.exports.killConnection = function () {
     mongoose.disconnect();
}

module.exports.getUsers = User.find();
