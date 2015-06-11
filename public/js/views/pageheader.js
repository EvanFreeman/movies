'use strict';

define(function (require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var template = require('text!templates/pageheader.htm');
    return Backbone.View.extend({
        template: template, //notice I'm not using under score, why? no 
                            //need this is just a strait up piece of marckup 
                            //no data fill. 
        render: function () {
            //$(this.el).empty(); //Because of marionette we don't need to 
            //do this it is already doing it on show. 
            $(this.el).append(this.template);
            return this;
        }
    });
});
