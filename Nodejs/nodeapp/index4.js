import express from 'express'

const app = express()
app.listen(8080, () => {
  console.log("Server started at port 8080")
})

const logger = (req, res, next) => {
  req.msg = "Hello";
  next()
};
// app.use(logger);

// app.get("/", (req, res) => {
//   res.send(req.msg + " World")
// })

// app.get("/products", (req, res) => {
//   res.send(req.msg + " Products");
// });

const access = (req, res, next) => {
  if(req.params.name === "john") {
    next();
  } else {
    res.send("Access Denied")
  }
}

app.get("/:name", access, (req, res) => {
  res.send("Hello World")
})