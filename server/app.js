var express = require('express');
var bodyParser = require('body-parser');
var employees = require('./routes/employees');
var app = express();
var port = 5000;

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/employees', employees);

app.listen(port, function(){
    console.log('Listening on port', port);
    
})