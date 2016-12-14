var http = require("http");
var url = process.argv[2];

http.get(url, function(response) {
	response.setEncoding("utf-8");
	response.on("data", function(data) {
		var str = data.toString();
		console.log(str);
	});
	response.on("error", function(error) {
		return console.log("An error occured " + error);
	});
});
