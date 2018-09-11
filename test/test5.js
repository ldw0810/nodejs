let fs = require('fs');
let data = {
  a: 1,
  b: 2,
};
fs.writeFile('1111.txt', data, function (res) {
  console.log(res);
});
fs.writeFileSync('222.txt', JSON.stringify(data), (res) => {
  console.log(res)
});