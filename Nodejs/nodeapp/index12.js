import express from 'express'
import userRouter from './userRouter.js'
import productRouter from './productRouter.js'
const app = express()


app.listen(8080, () => {
  console.log("Server running on port 8080")
})

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)