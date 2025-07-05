import express, { Router } from 'express'

const Router = express.Router();

Router.get('/show', (req, res) => {
  res.json({message: "we are in users/show endpoint"})
})
Router.post('/register', (req, res) => {
  res.json({message: "User registration API"})
})
Router.post('/login', (req, res) => {
  res.send({message: "User login API"})
})

export default Router