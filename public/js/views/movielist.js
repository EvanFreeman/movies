'use strict';

define(function (require) {
  var $ = require('jquery');
  var Backbone = require('backbone');
  var Movie = require('views/movie');
  var template = require( 'text!templates/movielist.htm');
    return Backbone.View.extend({
      //  don't do this:  el: $('#maincontainer') - because it will 
      //  result in a bad ref instead do this:
      //el: '#maincontainer',
      template: template,
      views: {},
      url: '',
      initialize: function () {
        this.collection.bind('destroy', this.removeOne, this);
        this.collection.bind('reset', this.render, this);
        this.collection.bind('add', this.addOne, this);
      },
      events: { //wire up events on teh view -these can be almost 
                //anything you like its jquery, or underscore not 
              //sure which they are mostly the same.
        'click #butAddItem': 'demoCreateOne' //I have a button in my 
                                            //view template that I 
                                            //wire an event to that 
                                            //adds a dummy movie for 
                                              //the demo.
      },
      demoCreateOne: function () {
        this.collection.create({
          'id': 'BVP3s',
          'name': 'Lord of the Rings ',
          'averageRating': 4.3,
          'releaseYear': 2003,
          'url': 'http://www.netflix.com/.....',
          'rating': 'PG-13'
        }); //notice that I add it to the collection and the view 
            //fires the addOne function because I bound the add of 
            //the collection to trigger the render. Cool.
        console.log(this.collection.length);
      },
      render: function () {
        console.log('render');
        console.log(this.collection.length);
        $(this.el).html(this.template); //add the template to the DOM
        this.collection.each(this.addOne, this);
        return this;
      },
      addOne: function (model) {
        console.log('addOne');
        var view = new Movie({ model: model });
        this.views[model.id] = view;
        $('tbody', this.el).append(view.render());
      },
      removeOne: function (model) {
        console.log('removeOne');
        this.views[model.id].$el.remove();
      }
    });
});
