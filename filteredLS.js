var fs = require("fs");
var path = require("path");

var dirPath = process.argv[2];
var ext = process.argv[3];
var resultList = [];

fs.readdir(dirPath, function(err, list) {
	if (err) {
		console.log(err);
	}
	else {
		list.forEach(function(element) {
			if (path.extname(element) == ('.' + ext)) {
				//resultList.push(element);
				console.log(element);
			}
		});
		//console.log(resultList);
	}
});
