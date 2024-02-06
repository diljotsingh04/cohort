const express = require("express");
const app = express();

let user = [
    {
        name: "ram",
        kidneys:[
            {isHealthy: true},
            {isHealthy: false}
        ]
    }
]

app.use(express.json());

app.get('/', (req, res)=>{
    const userName = user[0].name;
    const numberOfKidneys = user[0].kidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i of user[0].kidneys){
        if(i.isHealthy == true){
            numberOfHealthyKidneys++;
        }
    }
    let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        userName,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
})

app.post('/', (req, res)=>{
    const jsonBody = req.body.isHealthy;
    user[0].kidneys.push({isHealthy: jsonBody});
    res.status(200).json({
        message: "Added Successfully"
    })
})
app.put('/', (req, res)=>{
    for(let i of user[0].kidneys){
        i.isHealthy = true;
    }
    res.status(200).send({
        message: "Done!"
    })
})
app.delete('/', (req, res)=>{
    const numberOfKidneysBefore = user[0].kidneys.length;
    user[0].kidneys = user[0].kidneys.filter(i => i.isHealthy);
    res.status(200).send({
        "initialKidneys": numberOfKidneysBefore,
        "afterRemoving" : user[0].kidneys.length
    })
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000/");
});