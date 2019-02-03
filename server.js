const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

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

app.get("/", function(req,res){
    res.send("All the books I have listened to since 2018!");
});

app.get("/api/:books?", function(req,res){
    let listing = req.params.books;
    
    if(listing){
        for (let i = 0; i < books.length; i++){
            if (listing === books[i].author){
                return res.json(books[i]);
            }
        }
        return res.send("No author found"); 
    }
    return res.json(books);
});

app.post("/api/books", function(req, res){
    let newBook = req.body;
    books.push(newBook);
    res.json(newBook);
});

app.listen(PORT, function(){
    console.log("Listening on PORT "+ PORT);
});