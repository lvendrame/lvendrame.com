var express = require('express');
var app = express();

app.use(express.static('site'));
app.get('*', function (req, res) {
  res.sendFile('/site/index.html');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
