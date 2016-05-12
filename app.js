var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var path = require('path');
global.appRoot = path.resolve(__dirname);

nunjucks.configure(appRoot + '/views', {
    express: app
});
app.set('view engine', 'html');

app.use(express.static(appRoot + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('./controllers'));

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
