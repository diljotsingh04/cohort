const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/sum",(req, res)=>{
    let gotBody = req.body;
    let a = gotBody.a;
    let b = gotBody.b;

    let authToken = req.headers.authentication;
    let result = parseInt(a) + parseInt(b);
    res.status(200).send({
        result: result,
        headers: authToken
    });
});

app.listen(3000,()=>console.log("http://localhost:3000"));