var http = require('http');
var readline = require('readline');

var port = 0;

var r1 = readline.createInterface(process.stdin, process.stdout);

r1.question('>>>', (line) => {
    port = line;
    
    http.createServer(function (req, res) {
    console.log("Http " + port);
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write("Hello World " + port);
    res.end();
    }).listen(port);
    
    console.log(port);
    r1.close()
});
