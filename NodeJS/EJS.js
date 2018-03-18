var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(request, response){

    response.send("Главная страница");
});
app.get("/contact", function(request, response){

    response.render("contact", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"
    });
});
app.listen(3000);
