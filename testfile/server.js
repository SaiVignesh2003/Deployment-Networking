const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Backend is working on port 3000");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}).listen(3000);

console.log("Backend running on http://localhost:3000");
