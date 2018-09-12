let fs = require('fs');
fs.stat('test1.js', (err, data) => {
  console.log(err);
  console.log(data);
});
console.log('-------------------------------');
let test2 = fs.statSync('test2.js');
console.log(test2);