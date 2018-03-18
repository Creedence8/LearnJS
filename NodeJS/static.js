var express = require("express");

var app = express();

app.use("/sp",express.static(_dirname + "\public"));

app.get("/main/:id", function(request, response){

    response.send(`<b>Главная страница</b> ${request.params.id}`);
});
app.get("/contact", function(request, response){

      response.send("fuck u");
});
app.listen(3000);
