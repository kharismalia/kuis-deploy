import express from "express";
const app=express();

app.use((req,res,next)=>{
    if(req.url=="/risma"){
        console.log("Risma");
    }
    console.log(req.url);
    next();
});

//route
app.get("/api/salam",(req,res)=>{
    res.send("assalamua'laikum");
});

app.listen(3000,()=>{
    console.log("running server");
});