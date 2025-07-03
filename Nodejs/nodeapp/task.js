import express from 'express'

const app = express()
app.listen(8080, () => {
  console.log("Server started at 8080")
})

app.use(express.json());
let users = [];

const auth = (req, res, next) => {
  if(req.headers.authorization) {
    next();
  } else {
    res.json({ message: "Invalid token" })
  }
}

app.post("/register", (req, res) => {
  users.push(req.body)
  res.json({ message: "New User Registerd" })
})

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const found = users.find(user => user.email === email && user.pass === pass);
  if(found) {
    res.json({ message: "Welcome User" });
  } else {
    res.json({ message: "Access Denied" });
  }
})

app.get("/", auth, (req, res) => {
  res.json(users);
})