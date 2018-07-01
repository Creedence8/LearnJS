var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// для работы с promise
mongoose.Promise = global.Promise;

// установка схемы
module.exports = new Schema({
    name: String,
    age: Number
});
