const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("It's my index page");
  } else if (request.url === "/about") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("It's my about page");
  } else if (request.url === "/contact") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("It's my contact page");
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain");
    response.end("Page not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
