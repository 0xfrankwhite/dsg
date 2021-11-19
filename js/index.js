const http = require('http')
const fs = require('fs')

var htmlFile;
var cssFile;
var kobemj;
var logoJpg;
var symbolJpg;

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
fs.readFile('./assets/kobemj.jpg', function(err, data) {
    if (err){
        throw err;
    }
    kobemj = data;
});
fs.readFile('./assets/logo.jpg', function(err, data) {
    if (err){
        throw err;
    }
    logoJpg = data;
});
fs.readFile('./assets/symbol.jpg', function(err, data) {
    if (err){
        throw err;
    }
    symbolJpg = data;
});


const server = http.createServer((req, res) => {
  console.log(req.url)
    switch (req.url) {
        case "/css/main.css" :
            res.writeHead(200, {"Content-Type": "text/css"});
            res.write(cssFile);
            break;
        case "/assets/kobemj.jpg" :
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            res.write(kobemj);
            break;
        case "/assets/logo.jpg" :
            res.writeHead(200, {"Content-Type": "image/jpeg"});
            res.write(logoJpg);
            break;
        case "/assets/symbol.jpg" :
                res.writeHead(200, {"Content-Type": "image/jpeg"});
                res.write(symbolJpg);
                break;
        default :    
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(htmlFile);
    };
    res.end();
  }
)

server.listen(process.env.PORT || 3000, () => {console.log(`Listening on port ${process.env.PORT || 3000}`)})