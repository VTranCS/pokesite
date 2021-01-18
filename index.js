var express = require('express');
var app = express();
var hbs = require('hbs');
var path = require('path');
var fs = require('fs');


app.set('view engine', 'hbs');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/resources', express.static(path.join(__dirname, 'resources')));


app.get('/', function (req, res) {
    res.render("pokemonGuesser");
});


var listener = app.listen(49644, function () {
    console.log('Express server started on port: ' + listener.address().port);
});