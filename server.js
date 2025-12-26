import express from "express";
import sum from "./sum.js";

const app = express();
const port = 8000;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

app.get("/home",async(req,res)=>{
    res.json({

        msg :"iam home"});
})

app.get("/getsum/:a/:b", async(req,res)=>{

    const {a,b}=req.params;
    res.json({
        ans:sum(parseInt(a),parseInt(b))
    });
})