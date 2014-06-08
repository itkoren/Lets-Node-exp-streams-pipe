var through = require("through");

// The callback to be used on 'data' event
function write(chunk) {
    console.log("got %d bytes of data", chunk.length);
}

// The callback to be used on 'end' event
function end() {
    console.log("End Of Stream");
}

// Pipe it out!!!
process.stdin.pipe(through(write, end));