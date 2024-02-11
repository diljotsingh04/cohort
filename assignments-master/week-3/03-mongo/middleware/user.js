const {User} = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    
    const hasUser = await User.findOne({username, password});
    
    if(hasUser){
        next();
    }
    else{
        res.status(403).send({
            message: "User Not Exists!"
        })
    }
}

module.exports = userMiddleware;