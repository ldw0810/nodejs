console.log(process === global.process);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
console.log(process.argv);
console.log(process.domain);
console.log(process.emit);
console.log(process.cwd());
console.log(process.execPath);
console.log(process.getgid());
console.log(process.getuid());
console.log(process.getuid());
process.nextTick(function () {
  console.log('nextTick callback!');
});
console.log('nextTick was set!');
process.on('exit', function (code) {
  console.log('about to exit with code: ' + code);
});
console.log(typeof window)
if (typeof window === 'undefined') {
  console.log("node js")
} else {
  console.log("browser")
}