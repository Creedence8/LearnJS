var express = require("express");
var hbs = require("hbs");

var app = express();
// устанавливаем путь к каталогу с частичными представлениями
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static(__dirname), express.static("public") );

app.get("/", function(request, response){

    response.render("home.hbs");
});
app.get("/contact", function(request, response){

    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        email: ["gavgav@mycorp.com"],
        phone: "+1234567890"
    });
});
app.listen(3000);
