'use strict';

var app = {}; //this is the global app object. Used to assign global things
              //like the router to be accessible everywhere.

//prevent errors in IE when console is not present.
/* jshint ignore:start */
window.console || ( window.console = { log:function(){} });
/* jshint ignore:end */

require.config({
    paths: {
        jquery: '../vendor/jquery/dist/jquery.min',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
        text: '../vendor/text/text',
        templates: '../templates',
        routers: 'routers',
        models: 'models',
        collections: 'collections',
        views: 'views'
    },
    shim: {
        'Moment': {
            exports: 'moment'
        },
        'bootstrap': ['jquery'],
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'backbone'
        }
    }
});

define(function (require) {
        var Backbone = require('backbone');
        var Router = require('routes');
        console.log('config loaded...');
        app.router= new Router();
        Backbone.history.start();
    }
);
