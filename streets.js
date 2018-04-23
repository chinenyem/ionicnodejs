module.exports = function(app) {
    app.get('/posts', function(req, res){
      console.log("posts!")
    })
    return app;
};
