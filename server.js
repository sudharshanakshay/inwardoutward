var express = require('express');
var path = require('path');
var app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.sendFile(path.join('/build', 'index.html'));
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('build', 'index.html'));
    });
  }
