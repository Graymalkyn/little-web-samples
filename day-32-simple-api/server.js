var express = require('express');
var app = express();

app.use(express.static('public'));  //Sets up static file handling.

var count = 0;

app.get('/api/counter', function(req, res){
  res.send({ theCount: count })
});

app.post('/api/counter', function(req, res){
  count += 1;
  res.sendStatus(204);
});

// app.put('/api/counter', function(req, res){
//   res.send({ theCount: count })
// });
//
// app.delete('/api/counter', function(req, res){
//   count += 1;
//   res.sendStatus(204);
// });



app.listen(5001, function() {
  console.log('listening on port 5001');
});
