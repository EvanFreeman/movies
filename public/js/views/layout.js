'use strict';

define(function(require) {
  var Backbone = require('backbone');
  var Movies = require('collections/movies');
  var MovieList = require('views/movielist');
  var Sidebar = require('views/sidebar');
  var PageHeader = require('views/pageheader');
  var template = require ('text!templates/layout.htm');
  

  return Backbone.View.extend({
    el: '#main',
    template: template,
    initialize: function initialize(){
        this.render();
    },
    render: function render(){
      var movies = new Movies();
       
      this.$el.html(this.template);

      var sb = new Sidebar({el: '#sidebar'});
     // sb.render();

      var ph = new PageHeader({ el: '#page-header'});
      ph.render();

      this.movieList=
        new MovieList({ collection: movies, el: '#mainContainer'});
      
      movies.fetch({reset: true});
    }
  });
});
