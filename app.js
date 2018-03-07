var express = require('express');
var app = express();

var log4js = require('log4js');
var settings = require('./settings');
log4js.configure(settings.log4js);


var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);

var dtu_route = require('./routes/dtuRoute');
app.use(dtu_route);

app.listen(3000);

console.log('server listening port 3000');