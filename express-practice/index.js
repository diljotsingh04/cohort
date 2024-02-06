const express = require("express");
const app = express();


// route handler
app.get('/', (req, res)=>{
    res.send("<h1>Sat Sri Akal</h1>");
})


app.get('/json', (req, res)=>{
    res.json({
        student_details:{
            name: "Diljot",
            roll_no: 2102458
        }
    })
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000/");
});