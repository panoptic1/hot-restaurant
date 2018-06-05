var bodyParser = require('body-parser');

var path = require('path');

var express = require('express');

var app = express();

var PORT = process.env.PORT || 8080;
 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});