var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/paladins.json", 'utf8', function (err, data) {
        res.end(JSON.parse(data).map(function(obj) {
            return decodeURI(obj._id).replace(/_/g, ' ');
        }).join('\n'))
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Paladins REST API listening at http://%s:%s", host, port)
});