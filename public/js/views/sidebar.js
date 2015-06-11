'use strict';

define(function (require) {
  var Backbone = require('backbone');
  var sidebar = require('text!templates/sidebar.htm'); 
  return Backbone.View.extend({
    template: sidebar, //notice I'm not using under score, why? no need this 
                      //is just a trait up piece of marckup no data fill. 
    render: function () {
      //$(this.el).empty(); //Because of marionette we don't need to do 
      //this it is already doing it on show. 
     this.$el.html(this.template);
      return this;
    }
  });
});
