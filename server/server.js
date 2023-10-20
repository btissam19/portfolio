import express from 'express';
import connect from './database/mongo.js';
import * as dotenv from 'dotenv';
dotenv.config()
const port=process.env.PORT||4000;
const databaseUrl=process.env.MONGO_URL;
const app=express();


app.get('/',(req,res)=>res.send("Hello Word"))



const start =async ()=>{
    await connect(databaseUrl);
    app.listen(port,console.log(`your sever is running in http://localhost:${port}`));
}

start();