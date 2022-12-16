import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import cors from 'cors';


dotenv.config()

const app = express();
const connectDB = ()=>{ 
    
    mongoose.connect(process.env.MONGO,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            
        }
        ).then(()=>{
        console.log("connected to Mongo");
    }).catch((err)=>console.log(err))
}
mongoose.set('strictQuery', false)
// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(5000, ()=>{
    connectDB()
    console.log("Connected to backend");
})