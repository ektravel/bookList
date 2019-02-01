const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", function(req,res){
    res.send("Welcome to the list of books I have listened to since 2018!");
});

class Book{
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }
};

let book1 = new Book("The Path: What Chinese Philosophers Can Teach Us About the Good Life", "Michael Puett", 2 );

let book2 = new Book("A World Lit Only by Fire", "William Manchester", 3);

let book3 = new Book("How Not to Die", "Michael Greger", 3);

app.get("/book1", function(req,res){
    res.json(book1);
});

app.get("/book2", function(req,res){
    res.json(book2);
});

app.get("/book3", function(req,res){
    res.json(book3);
});

app.listen(PORT, function(){
    console.log("Listening on PORT "+ PORT);
});