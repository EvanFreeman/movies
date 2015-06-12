'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser').json();
var movieapp = require('./controllers/movies.js');

app.set('port', process.env.PORT || 3333);
app.use('/', express.static(__dirname + '../../public'));
app.use(bodyParser);

app.use(function (req, res, next) {
  res.locals.expose = {};
  next();
});

//we can do an authentication handler that everything passes through.
app.use(function (req, res, next) {
  //sets the response header to text since I'm returning JSON. THis is global 
  //unless changed in handlers.
  res.setHeader('Content-Type', 'text/plain'); 
  //Go to to the next handler.
  next();
});

//default server up the starter page.
app.get('/', function (req, res) {
  res.sendFile('../index.html');
});

app.get('/movies', movieapp.findAll);
app.get('/movies/:id', movieapp.findById);
app.post('/movies', movieapp.addMovie);
app.put('/movies/:id', movieapp.addMovie);
app.get('/filldb', movieapp.populateDb);
app.delete('/movies/:id', movieapp.remove);

app.listen(app.get('port'));
console.log('Movie application server listening on port ' + app.get('port'));
