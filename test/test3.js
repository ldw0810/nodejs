let fs = require('fs');
fs.readFile('helloworld.js', 'utf-8', (err, data) => {
  if (err) {
    console.log("err");
    console.log(err);
  } else if (data) {
    console.log("data");
    console.log(data);
  }
});