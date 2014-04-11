var express = require('express');
var fs = require('fs');
var buffer = require('buffer');
var app = express();
app.use(express.logger());

fs.readFileSync('index.html', function (err, data) {
    if(err) throw err;
    console.log(data);
});

app.get('/', 
function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
