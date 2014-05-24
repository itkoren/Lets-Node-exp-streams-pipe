var fs = require("fs");
var fileName = __dirname + "/ipsum.txt";

var readStream = fs.createReadStream(fileName);

readStream.on("readable", function() {
    var chunk;
    while (null !== (chunk = readStream.read())) {
        console.log("got %d bytes of data", chunk.length);
    }
});

//readStream.on("data", function(chunk) {
//    if (chunk) {
//        console.log("Got Data Event: ", chunk);
//    }
//});

readStream.on("end", function() {
    console.log("End Of Stream");
});

readStream.on("error", function(err) {
    console.log("BASSA!!! got error: " + err);
});