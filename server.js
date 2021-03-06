"use strict";

const express = require('express'),
      bodyParser = require('body-parser'),
      config  = require('./configure'),
      routes = require('./streets'),
      logger = require('morgan'),
      methodOverride = require('method-override'),
      cors = require('cors');

let app = express();
app = config( app );

//https://afternoon-hamlet-38670.herokuapp.com/posts

app.get('/posts', function(req, res) {
    console.log("posts!");
    res.json({"success": true});
});

app.post('/add/post', function(req, res) {
    console.log("posts!");
    res.json({"success": true});
});


app.listen(process.env.PORT || 8080);
