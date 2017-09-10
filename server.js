// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Article =require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Initialize Express
var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({defaultLayout: "main"}));
// app.set("view engine", "handlebars");


// // Make public a static dir
// app.use(express.static("public"));

// Database configuration with mongoose
//mongoose.connect("mongodb://heroku_thdwtncq:v0db4jti38s60tnr86cs97bvvo@ds161483.mlab.com:61483/heroku_thdwtncq");
mongoose.connect("mongodb://localhost/nytreact");

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Routes
//=================
app.post("/api/saved", (req,res)=>{
  var entry=new Article(req.body.article);
  entry.save((err,doc)=>{
    if(err)
      {
        console.log("saving article error: "+ err);
      }
      else
        {
          conosle.log("saved article: "+ doc.title);
        }
  })

});



app.listen(port, function() {
    console.log("App running on " + port);
  });