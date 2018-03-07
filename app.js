var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

var dtu_route = require('./routes/dtuRoute');
app.use(dtu_route);

app.listen(3000);

console.log('server listening port 3000');