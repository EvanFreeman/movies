'use strict';

define(function (require) {
  var Backbone = require('backbone');
  var _ = require('underscore');
  var $ = require('jquery');
  var template = require('text!templates/movie.htm');

  return Backbone.View.extend({
    tagName: 'tr', //this specifies the tag to create when we render the
                  //view, if not specified creates a div.
    template: _.template(template), //I use underscore here because 
                                            //in the render method I need an
                                            //underscore object to do the 
                                            //templateing stuf.
    initialize: function () {
      _.bindAll(this, 'render');
    },
    render: function () {
      return $(this.el).append(this.template(this.model.toJSON()));
    }
  });
});
