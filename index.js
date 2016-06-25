var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
  res.send('API root');
});

app.listen(app.get('port'), function() {
  console.log(`Server is listenning to port ${app.get('port')}`);
});
