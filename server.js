var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile('index.html', {
        root: __dirname + '/public'
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
