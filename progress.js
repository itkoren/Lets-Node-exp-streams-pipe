var http = require("http");

// Include The 'fs' Module
var fs = require("fs");

var server = http.createServer(function(req, res) {
    var newFile = fs.createWriteStream("uploaded.jpeg");
    var uploadedBytes = 0;
    var fileBytes = req.headers["content-length"];

    res.writeHead(200, {"content-type": "text/plain"});

    req.pipe(newFile);

    req.on("readable", function() {
        var chunk;
        while (null !== (chunk = req.read())) {
            console.log("got %d bytes of data", chunk.length);

            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            res.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });

//    req.on("data", function(chunk) {
//        if (chunk) {
//            console.log("Got Data Event: ", chunk);
//            res.write("Got Data Event\n");
//        }
//    });

    req.on("end", function() {
        res.end('Upload Complete!\n');
    });
}).listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("HTTP Server Started. Listening on " + server.address().address + " : Port " + server.address().port);
});
