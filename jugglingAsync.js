var http = require("http");
var uri = [];

uri.push(process.argv[2]);
uri.push(process.argv[3]);
uri.push(process.argv[4]);


function collectData(uri, callback) {
	var completeData = '';

	http.get(uri, function(response) {
		response.setEncoding('utf-8');
		response.on('data', function(data) {
			//get the complete chunk of data from the stream as a string
			completeData += data;
		});
		//callback(null, completeData);
		response.on('end', function() {
			//callback is called only after we get the complete data
			callback(null, completeData);
		});
		response.on('error', function(error) {
			console.log("An error has occured" + error);
		})
	});
}



collectData(uri[0], function(error, data) {
	if (error) {
		return console.log("An error occured" + error);
	}
	else {
		console.log(data);
		collectData(uri[1], function(error, data) {
			if (error) {
				return console.log("An error occured" + error);
			}
			else {
				console.log(data);
				collectData(uri[2], function(error, data) {
					if (error) {
						return console.log("An error occured" + error);
					}
					else {
						console.log(data);
					}
				});
			}
		});
	}
});
