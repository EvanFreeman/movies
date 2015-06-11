'use strict';

var mongo = require('mongodb');

var Server = mongo.Server,
  Db = mongo.Db,
  BSON = mongo.l;

var server = new Server('localhost', 27017, { auto_reconnect: true });
var db = new Db('moviesdb', server, { safe: true });

db.open(function (err, db) {
  if (!err) {
    console.log('Connected to moviesdb database');
    db.collection('movies');
  }
});

exports.findAll = function (req, res) {
  console.log('here we are');
  db.collection('movies', function (err, collection) {
    collection.find().toArray(function (err, items) {
      res.json(items);
    });
  });
};

exports.findById = function (req, res) {
  var id = req.params.id;
  console.log('Retrieving movie: ' + id);
  db.collection('movies', function (err, collection) {
    collection.findOne({ 'Id': id }, function (err, item) {
      res.json(item);
    });
  });
};

exports.addMovie = function(req, res) {
  var movie = req.body;
  console.log();
  console.log('Adding movie: ' + JSON.stringify(movie));
  db.collection('movies', function(err, collection) {
    collection.insert(movie, { safe: true }, function(err, result) {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        console.log(result.ops);
        res.json(result.ops[0]);
      }
    });
  });
};

exports.populateDb = function (req, res) {
  var movies = require('./data/movies');
  console.log('here');
  db.collection('movies', function (err, collection) {
    collection.insert(movies, { safe: true }, function (err, result) { 
      res.json(result);
    });
  }); 

};
