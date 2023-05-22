const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //solution1
    // fs.readFile('test-file.txt', (err, data) => {
    //         if (err) {
    //             res.writeHead(500);
    //             return res.end('Error loading test file');
    //         }
    //         res.writeHead(200);
    //         res.end(data);
    // });

    // Solution 2: Streams
    // const readable = fs.createReadStream("test-file.txt");
    // readable.on("data", chunk => {
    //   res.write(chunk);
    // });
    // readable.on("end", () => {
    //   res.end();
    // });
    // readable.on("error", err => {
    //   console.log(err);
    //   res.statusCode = 500;
    //   res.end("File not found!");
    // });

    //solution2: Streams
    //Pipe operator
    fs.createReadStream('test-file.txt').pipe(res);
})

server.listen(8000, 'localhost', (err, res) => {
    console.log('listening ...');
});