const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    const token = req.cookies.token;

    try {
        if (jwt.verify(token, 'secret_key')) {
            return res.send({
                message: 'you are on homepage'
            })
        }
    } catch (e) {
        return res.send({
            message: 'wrong credentials'
        })
    }
    return res.send({
        message: 'please signup or login'
    })
})

app.get('/clear', (req, res) => {

    res.clearCookie("token");
    return res.send({
        message: "cookie cleared"
    })
});

app.listen(3000);