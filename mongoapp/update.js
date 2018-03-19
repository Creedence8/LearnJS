 // findOneAndUpdate() обновляет один элемент
var mongoClient = require("mongodb").MongoClient;

var users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];

mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){

    var col = db.collection("users");
    col.insertMany(users, function(err, results){

        col.findOneAndUpdate(
          {name: "Bob"},              // критерий выборки
          { $set: {name: "Sam"}},     // параметр обновления
          {                           // доп. опции обновления
              returnOriginal: false
          },
          function(err, result){

              console.log(result);
              db.close();
          }
        );
    });
});

// updateMany() позволяет обновить все документы из коллекции, которые соответствуют критерию фильтрации
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){

    var col = db.collection("users");
    col.updateMany(
        {name: "Sam"},              // критерий фильтрации
        { $set: {name: "Bob"}},     // параметр обновления
        function(err, result){

            console.log(result);
            db.close();
        }
    );
});

// updateOne() аналогичен методу updateMany за тем исключением, что обновляет только один элемент. В отличие от метода findOneAndUpdate() он не возвращает измененный документ
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/usersdb", function(err, db){

    var col = db.collection("users");
    col.updateOne(
        {name: "Tom"},
        { $set: {name: "Tom Junior", age:33}},
        function(err, result){

            console.log(result);
            db.close();
        }
    );
});
