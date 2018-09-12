let fs = require("fs");
let crs = fs.createReadStream("test1.js");
let cws = fs.createWriteStream("test1111.js");
crs.pipe(cws);