import express from 'express';
import cors from "cors";
import route from './routes/index.js'

const app = express();

app.use(express.json({limit:"30mb"}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.use('/api/v1', route)

app.get("/", (_req, res) => {
    res.send("Hello there! This is stack-overflow-clone backend")
})

app.all("*", (_req, res) => {
    return res.status(404).json({
        success: false, 
        message: "Route not found"
    })
})

export default app;