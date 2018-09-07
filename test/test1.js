let greet = require("./helloworld");
let tempName = "yao";
greet(tempName);
module.exports.temopName = tempName;
module.exports.greet = greet;