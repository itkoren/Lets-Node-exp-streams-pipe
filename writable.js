var fs = require("fs");
var fileName = __dirname + "/temp.txt";

var writeStream = fs.createWriteStream(fileName);

var interval = setInterval(function() {
    var flushed = writeStream.write(Date.now().toString() + "\n");
    console.log("flushed: " + flushed);
}, 1000);

setTimeout(function() {
    clearInterval(interval);
    writeStream.end();
}, 10000);

writeStream.on("drain", function() {
    console.log("drained");    
});

writeStream.on("error", function(err) {
    console.log("BASSA!!! got error: " + err);
});