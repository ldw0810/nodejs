const crypto = require('crypto');
const hash = crypto.createHash('md5');
hash.update("hello world");
hash.update("hello");
console.log(hash);
console.log("----------------------")
console.log(hash.digest("hex"));
console.log("----------------------")

function aesEncrypt (data, key) {
  const decipher = crypto.createCipher("aes192", key);
  let decipted = decipher.update(data, "utf-8", "hex");
  console.log(decipher)
  console.log("----------------------")
  console.log(decipted)
}
aesEncrypt("hello", "password")