let fs = require("fs")
let crs = fs.createReadStream("test1.js", "utf-8");
crs.on("data", (res) => {
  console.log("data");
  console.log(res);
});
crs.on("error", (res) => {
  console.log("error");
  console.log(res);
});
crs.on("end", (res) => {
  console.log("end");
  console.log(res);
});