var express = require('express');
var app = express();
var http = require('http').Server(app);
 var squel = require("squel");
var path = require('path');
var booksModule = require('./server/books');
var books = new booksModule.Books();
app.get('/books', function (req, res) {

    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader('Content-Type', 'application/json');
    books.getData(function (data) {
        res.end(JSON.stringify(data));
    })


})

app.post('/updateBook', function (req, res) {
    req.on('data', function (data) {
      
        console.log("server received data:", JSON.parse(data));
        books.updateData(JSON.parse(data));
    });
})

app.post('/createNewBook',function(req,res){
    req.on('data', function (data) {      
        console.log("server received data:", JSON.parse(data));
        books.insertBook(JSON.parse(data));
    });
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    // res.send('<h1>Hello trtrtrtworld</h1>' + "<script src='/socket.io/socket.io.js'></script><script>  var socket = io(); </script>");

    res.sendFile('index.html', {
        root: path.join(__dirname, 'public')
    });
});






app.listen(8080, function (err) {
    console.log("listening to 8080")
});