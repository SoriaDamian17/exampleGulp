var express = require('express');

var app = express();

app.use('/static/',express.static(__dirname + '/public'));

app.listen(3000, function(req, res){
    console.log('Server corriendo en el puerto 3000');
});