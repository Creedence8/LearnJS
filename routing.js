// var express = require("express");
//
// var app = express();
// app.get("/", function(request, response){
//
//     response.send("<h1>Главная страница</h1>");
//     console.log("kek");
// });
// app.get("/", function(request, response){
//
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
//
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);
//////////////////////////////////////////////////////////////
var express = require("express");

var app = express();

var productRouter = express.Router();
productRouter.route("/")
            .get(function(request, response){

                response.send("Список товаров");
            });
productRouter.route("/:id")
            .get(function(request, response){

                response.send(`Товар ${request.params.id}`);
            });
app.use("/products", productRouter);

app.get("/", function(request, response){

    response.send("Главная страница");
});

app.listen(3000);
