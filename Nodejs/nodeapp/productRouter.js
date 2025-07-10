import express from 'express'

const Router = express.Router();

Router.get('/show', (req, res) => {
  res.send({message: "Show products API"})
})
Router.delete('/:id', (req, res) => {
  res.send({message: "Delete product API"})
})

export default Router