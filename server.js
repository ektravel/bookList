const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

class Book{
    constructor(title, author, rating){
        this.title = title;
        this.author = author;
        this.rating = rating;
    }  
};

let books = [];

function addBook(title, author, rating){
    let book = new Book(title, author, rating);
    books.push(book);
};

addBook("The Path: What Chinese Philosophers Can Teach Us About the Good Life", "Michael Puett", 2 );

addBook("A World Lit Only by Fire", "William Manchester", 3);

addBook("How Not to Die", "Michael Greger", 3);

//basic route that sends the user to the AJAX page
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req,res){
    res.sendFile(path.join(_dirname, "add.html"));
});

app.get("/all", function(req,res){
    res.sendFile(path.join(_dirname, "all.html"));
});

//display all books
app.get("/api/books", function(req,res){
    return res.json(books);
});

//add new book
app.post("/api/books", function(req, res){
    let newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});

app.listen(PORT, function(){
    console.log("Listening on PORT "+ PORT);
});