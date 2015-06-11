define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var Layout = require('views/layout');

  return Backbone.Router.extend({
    routes: {
      '': 'defaultRoute',    // #help
      'tellBob': 'bobAlert', //this is for demo purposes, add
                            //#tellBob at the end of the url and 
                            //see what happens. Think anchor tags 
                            //with an href that changes the url
      'nameAlert/:name': 'alertName'
    },
    defaultRoute: function () {
      console.log('defaultRoute');
      //setup the layout
      this.layout = new Layout();
    },
    bobAlert: function () {
      alert('Bob look at this woohoo!');
    },
    alertName: function (name) {
      alert(name);
    }
  });
});
