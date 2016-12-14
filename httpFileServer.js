//using http node core module
var http = require("http");
var fs = require("fs");

var port = process.argv[2];
var path = process.argv[3];

//create a http server instance and pass a listner function
//listner is called everytime a connection is received by the server
//request and response are node stream objects
var httpServer = http.createServer(function(request, response) {

	//creates a readable stream (for reading from a file)
	//start getting data from a file
	var readStream = fs.createReadStream(path);
	readStream.setEncoding('utf-8');

	//Since readstream is a stream object(EventEmitter)
	readStream.on('data', function(chunk) {
		console.log(chunk);
		//Since response is a stream object 
		response.write(chunk, 'utf-8');
	});

	//piping to the http response stream object
	//readStream.pipe(response, 'utf-8');

	//handling errors
	request.on('error', function(error) {
		console.log("An error occured" + error);
	});
	response.on('error', function(error) {
		console.log("An error occured" + error);
	});
});

httpServer.listen(port);
