import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from 'cors'

import productRouter from './routes/product'
import categoryRouter from './routes/category'
import authRouter from './routes/auth'

const app = express()

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())

app.use("/api", productRouter)
app.use("/api", categoryRouter)
app.use("/api", authRouter)


mongoose.connect("mongodb://localhost:27017/nodejs")
        .then(() => { console.log("Connect successfully" )})


const PORT = 1100;

app.listen(PORT, () => {
    console.log(`port ${PORT}`)
})