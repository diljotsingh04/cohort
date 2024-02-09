const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://diljot_singh:diljot_singh@diljot.buqsh.mongodb.net/cohort");

const db = mongoose.model('UsersData', {email: String, password: String});

const data = {email: ";jlj;ljkljkjl", password: "jlbhkj"};

// const entry = new db(data);

async function findExisting(){
    const existingUser = await db.findOne({email: "didljot@singh.com"});
    console.log(existingUser);
}
findExisting();

// entry.save().then(()=>console.log("saved"));