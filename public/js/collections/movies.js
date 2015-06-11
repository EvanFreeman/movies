'use strict';

define(function(require) {
  var Backbone = require('backbone');
  return Backbone.Collection.extend({
    url: '/movies', //this is the url to use when fetch is called, 
    //in a full rest api this would be more generic for creation and delete 
    //based on verbs.
    initialize: function () { //just an initialization method - **note** i
      //you should never do fetches of an objects model within its init, 
      //why? because it will never work.
        console.log('Movies initialize');
      }
  });
});
