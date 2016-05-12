var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

nunjucks.configure(__dirname + '/views', {
    express: app
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers'));

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
