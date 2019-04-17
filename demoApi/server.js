var express = require('express');
var app = express();
var port = process.env.port || 8080;

// load product controller module
var productController = require('./controller/ProductController')();
//         PATH           middleware function
app.use("/api/products", productController);

app.listen(port, function() {
    var datetime = new Date();
    var message = "Server running on Port:- " + port + " Started at :- " + datetime;
    console.log(message);
});

app.get("/product", function(requeest, response){
    response.json({"Message":"Welcome to the jungle"});
});

