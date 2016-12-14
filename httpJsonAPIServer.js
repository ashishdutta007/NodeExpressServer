var http = require("http");
var url = require("url");
var port = process.argv[2];

var httpServer = http.createServer(function(request, response) {
	var method = request.method;
	var uri = request.url;
	//using 'url' node core module for parsing the url 
	var parsedUrl = url.parse(uri, true);

	request.on('error', function(error) {
		return console.log("Error occured" + error);
	});
	if (method.toUpperCase() != 'GET') {
		response.end();
		return console.log("Request method mismatch");
	}
	else {
		if (parsedUrl.pathname === '/api/parsetime') {
			//console.log(parsedUrl.query.iso);
			var iso = parsedUrl.query.iso;
			//converting to date js object by passing the ISO date string
			//then we can extract individual date parameters
			var date = new Date(iso);
			var res = {
				"hour": date.getHours(),
				"minute": date.getMinutes(),
				"second": date.getSeconds()
			}
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			response.write(JSON.stringify(res));
			response.end();
		}
		else if (parsedUrl.pathname === '/api/unixtime') {
			var iso = parsedUrl.query.iso;
			var date = new Date(iso);
			var res = {
				"unixtime": date.getTime()
			}
			response.writeHead(200, {
				'Content-Type': 'application/json'
			});
			response.write(JSON.stringify(res));
			response.end();
		}
		else {
			return console.log("Not appropriate URL requested");
		}
	}
	response.on('error', function(error) {
		return console.log("Error occured" + error);
	});
});

httpServer.listen(Number(port));
