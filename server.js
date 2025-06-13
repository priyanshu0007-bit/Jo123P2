const http = require("http");

const port = 8081;

http.createServer((req, res) => { // cal back fun
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2>Hey server started</h2>");
  res.end();
})
.listen(port, () => { // call back fun
  console.log(`NodeJs Server started running on Port ${port}`); // ✅ backticks used here
});
  


//https://localhost:8081