import http from 'http'

const server = http.createServer((req, res) => {
  res.end("Good Morning!!");
});
server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});