const express = require('express');
const https = require('https');
const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/videos",function(req,res){
  res.render("videos");
});







app.listen(4000,function(){
  console.log("Server is Running at Port 3000");
})
