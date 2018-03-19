var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";
// mongoClient.connect(url, function(err, db){
//
//     if(err) return console.log(err);
//
//     db.collection("users").find({name: "Tom", age: 23}).toArray(function(err, results){
//
//         console.log(results);
//         db.close();
//     });
// });

// Метод findOne() работает аналогично, только позволяет получить один документ
mongoClient.connect(url, function(err, db){

    if(err) return console.log(err);

    db.collection("users").findOne({name: "Bob"}, function(err, doc){

        console.log(doc);
        db.close();
    });
});
