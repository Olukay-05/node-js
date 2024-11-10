const fs = require("fs");
const http = require("http");
const url = require("url");

// Blocking, Synchronous method
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOutput = `This is what we know about the Avocado: ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("Text has been created ");

// Non - Blocking, Asynchronous method
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

//Server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/" || pathname === "/overview") {
    res.end("this is the overvoew page");
  } else if (pathname === "/product") {
    res.end("this is the product page");
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found</>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
