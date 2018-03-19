var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/usersdb";
mongoClient.connect(url, function(err, db){

    var collection = db.collection("users");
    var user = {name: "Tom", age: 23, sex: "male"};
    console.log(user);
    collection.insertOne(user, function(err, result){
        console.log(user);
        if(err){
            return console.log(err);
        }
        console.log(result.ops);
        db.close();
    });
});
