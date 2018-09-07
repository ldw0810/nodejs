let fs = require('fs');
fs.readFile('../assets/images/AppStore.png', (err, data) => {
  if (err) {
    console.log('err:');
    console.log(err);
  } else if (data) {
    console.log('data:');
    console.log(data);
    console.log('-------------------------------');
    console.log(data.length);
  }
});