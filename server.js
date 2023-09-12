// port to use
const port = 3000;

//load express
const express = require('express');
const path = require('path');
const todoDB = require('./data/todo-db');
const studentDB = require('./data/students');

//create express app
const myApp = express();

//configure the app (app.set)
myApp.set('view engine', 'ejs');
myApp.set('views', path.join(__dirname, 'views'));
//make the 'public' folder staticly accessable
myApp.use(express.static('public'));
myApp.use("/css", express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
myApp.use("/js", express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

//mount middleware

//mount routes...the below is not best practice
//define a 'root' route [not best practice]
//root is '/'
myApp.get('/', function (request, response) {
    response.redirect('/home');
});

myApp.get('/home', function (request, response) {
    response.render('home');
});

myApp.get('/todos', function(request, response) {
    response.render('todos/index', {
        todoArray: todoDB.getAll()
    });
});

myApp.get('/students', function(request, response) {
    //render what is in the file:students/index
    response.render('students/index', {
        studentArray: studentDB.getAll()
    });
});

myApp.get('/students/:id', function(request, response) {
    console.log(`id = ${request.params.id}`);
    response.render('students/show', {oneStudent: studentDB.getOne(request.params.id)});
});

//define a port on our computer to run 'see' app
myApp.listen(port, function () {
    console.log(`listening on port ${port}`);
});