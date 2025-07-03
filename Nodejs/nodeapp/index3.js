import express from 'express';

const app = express();
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

// app.get("/", (req, res) => {
//   res.send("Hello World!!")
// })

// app.get("/user", (req, res) => {
//   res.send("Hii User")
// })
// app.get("/ab*cd", (req, res) => {
//   res.send("Welcome")
// })


const products = [
  {id: 1, name: "product1", price: 12},
  {id: 2, name: "product2", price: 45},
  {id: 3, name: "product3", price: 30},
]
// app.get("/products/:id", (req, res) => {
//   const pid = req.params.id;

// })

// app.get("/:name", (req, res) => {
//   res.send(req.params.name)
// })

app.get("/student/:name/:age", (req, res) => {
  res.send(req.params.name + req.params.age);
})