var mod = require("./mod-filter.js");

var dir = process.argv[2];
var ext = process.argv[3];

mod(dir, ext, function(err, data) {
	if (err) {
		return console.log('Error occured' + err);
	}
	else {
		data.forEach(function(element) {
			console.log(element);
		});
	}
});
