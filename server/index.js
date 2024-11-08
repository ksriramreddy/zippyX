import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import helmet from 'helmet';
import { connectDB } from './Config/connectDB.js';
dotenv.config()
const app = express();
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get('/', (req, res) => {
    res.json({
        message : 'Hello from the server!'
    })
})

const PORT  = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})

