// 'net' node core network module
var net = require("net");
var port = process.argv[2];

//creating a TCP server instance passing a connection listner
var server = net.createServer(function(socket) {

	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	var str = pad(year, 4) + '-' + pad(month, 2) + '-' + pad(day, 2) + ' ' + pad(hour, 2) + ':' + pad(min, 2) + '\n';
	//console.log(str);

	socket.write(str);
	socket.end();
	socket.on('finish', function() {
		console.log('Socket writable stream finish event');
	});
	/*socket.on('end', function() {
		console.log("Connection is closed");
	});*/
});

//listner method of the server is called every time 
//whenever a new TCP connection is generated to the server
server.listen(Number(port));

//pad with zeroes
function pad(number, zeroes) {
	var lotsOfZeroes = '00000000000000000000';
	return (lotsOfZeroes + number.toString()).slice(-zeroes);
}
