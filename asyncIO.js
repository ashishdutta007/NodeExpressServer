var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
	if (err) {
		console.log(err);
	}
	else {
		var newLines = data.toString().split('\n').length - 1;
		//var newLines  = data.split('\n').length - 1;
		console.log(newLines);
	}
});
