var path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    cors = require('cors'),
    logger = require('morgan');


module.exports = function(app) {
    app.use(methodOverride());
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.raw());
    // parse text
    app.use(bodyParser.text());
    // app.use(bodyParser({
    //     uploadDir:path.join(__dirname, 'public/upload/temp')
    // }));
    return app;
};
