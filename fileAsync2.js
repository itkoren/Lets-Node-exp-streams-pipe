var fs = require("fs");
var http = require("http");
var fileName = __dirname + "/ipsum.txt";

var server = http.createServer(function (req, res) {
	fs.exists(fileName, function(exists) {
		if (exists) {
			fs.stat(fileName, function(error, stats) {
				if (error) {
					throw error;
				}
				if (stats.isFile()) {
                    var stream = fs.createReadStream(fileName);
                    stream.pipe(res);
				}
			});
		}
	});
}).listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("HTTP Server Started. Listening on " + server.address().address + " : Port " + server.address().port);
});