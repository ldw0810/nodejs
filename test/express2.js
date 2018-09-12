var express = require('express');
var app = express();
let fs = require('fs');
app.get('/', function (req, res) {
  console.log(111111);
  fs.readFile('./test2.js', function (err, data) {
    console.log(2222);
    if (data) {
      console.log('test2.js');
      console.log('-------------------');
      console.log(data);
      console.log('-------------------');
    }
    if (err) {
      res.status(500).send('read file1 error');
    }
    fs.readFile('./test3.js', function (err, data) {
      if (data) {
        console.log('test3.js');
        console.log('-------------------');
        console.log(data);
        console.log('-------------------');      }
      if (err) {
        res.status(500).send('read file2 error');
      }
      res.type('text/plain');
      res.send(data);
    });
  });
});
app.listen(5000, () => {
  console.log('----------start-------------');
});