var http = require("http");
var url = process.argv[2];
var completeData = "";

http.get(url, function(response) {
	response.setEncoding('utf-8');
	response.on("data", function(data) {
		completeData = completeData + data;

	});
	response.on('error', function(error) {
		console.log("An error occured " + error);
	});
	response.on('end', function() {
		console.log(completeData.length);
		console.log(completeData);
	});
});
