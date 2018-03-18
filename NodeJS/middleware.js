var express = require("express");

var app = express();
app.use(function(request, response, next){

    console.log("Middleware 1");
    next();
});
app.use(function(request, response, next){

    console.log("Middleware 2");
    response.send("Middleware 2");
    next();
});

app.get("/", function(request, response){
    console.log("Route /");
    try {response.send("Hello");}
    catch (e) {console.log(e.message);}

});
app.listen(3000);
