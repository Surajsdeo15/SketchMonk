import express from 'express';
import path from 'path';
import TaskRouter from './Routes/Task.Route.js';
import {fileURLToPath} from 'url';
import mongoose from 'mongoose';
import GetTaskRoute from './Routes/Get.Task.Route.js';

const app=express();

// console.log(fileURLToPath);
const __filename= fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname=path.dirname(__filename);
// console.log(__dirname);



app.use(express.json());



app.use('/api',TaskRouter)
app.use('/api',GetTaskRoute)

app.use(express.static(path.join(__dirname,'/frontend/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/frontend/dist/index.html'))
})

mongoose.connect('mongodb+srv://surajsinghdeo15:9qLal3C2H38hkmKC@cluster0.kbn9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{}).then(() => console.log('Connected to MongoDB 🎉'))
.catch((error) => console.error('MongoDB Connection Error:', error));
app.listen(4000,()=>{

    console.log("Server is running at 4000");
})