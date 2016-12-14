var fs = require('fs');
var path = require('path');
var resultList = [];

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			callback(err, null);
		}
		else {
			list.forEach(function(element) {
				if (path.extname(element) == ('.' + ext)) {
					resultList.push(element);
				}
			});
			callback(null, resultList);
		}
	});
};
