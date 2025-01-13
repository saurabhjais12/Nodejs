//Microservices Architecture
// Microservice Example with Express
//npm install express --save

const express =require('express');

const app =express();



app.get("/service1",(req,res)=>{
    res.send("hello world");
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})

app.get("/contact",(req,res)=>{
    res.send("this is conatact page");
})



app.listen(5000,()=>{
    console.log("it is running at port 5000");
})