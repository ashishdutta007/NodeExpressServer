var http = require("http");
var port = process.argv[2];

//create a node http server
//pass the request handler
var httpServer = http.createServer(function(request, response) {

	var body = [];
	var method = request.method;
	var data = '';

	if (method.toUpperCase() != 'POST') {
		//ending the response writeable stream
		response.end();
		return console.log("Not a POST method request");
	}
	else {
		//since request is already a readable stream
		request.setEncoding('utf-8');
		request.on('data', function(chunk) {
			//data = data + chunk;
			//var uCaseStr = chunk.toUpperCase();
			response.write(chunk.toString().toUpperCase());
		});
		/*request.on('end', function() {
			response.write(data.toString().toUpperCase());
		});*/
		response.on('finish', function() {
			console.log('Response is sent to the user');
		});
		request.on('error', function(error) {
			return console.log('An error occured' + error);
		});
		response.on('error', function(error) {
			return console.log('An error occured' + error);
		});
	}
});

httpServer.listen(Number(port));
