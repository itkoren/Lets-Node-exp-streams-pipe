var concat = require("concat-stream");

// Pipe it ALL out
process.stdin.pipe(concat(function (body) {
    console.log(JSON.parse(body));
}));