const http = require('http')
const fs = require('fs')

var htmlFile;
var cssFile;

fs.readFile('index.html', function(err, data) {
    if (err){
        throw err;
    }
    htmlFile = data;
});

fs.readFile('./css/main.css', function(err, data) {
    if (err){
        throw err;
    }
    cssFile = data;
});


const server = http.createServer((req, res) => {
  console.log(req.url)
    switch (req.url) {
        case "/css/main.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(cssFile);
            break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(htmlFile);
    };
    res.end();
  }
)

server.listen(process.env.PORT || 3000, () => {console.log(`Listening on port ${process.env.PORT || 3000}`)})