var fs = require("fs");

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var array = str.split('\n');

console.log(array.length-1);
