const express = requrie("express");
const app = express();

app.get("/", function(req,res){
    res.send("Welcome to my Book List!");
});

app.listen(3000);