let http = require('http');
let fs = require('fs');
let server = http.createServer((request, response) => {
  console.log('Client request URL: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf8', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === '/dojo.html') {
    fs.readFile('dojo.html', 'utf8', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  } 
  else if (request.url === '/styles.css') {
    fs.readFile('styles.css', (errors, contents) => {
      response.writeHead(200, {'Content-Type': 'text/css'});
      response.write(contents);
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});

server.listen(6789);
console.log('Running in localhost at port 6789');

