const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'diljot',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}));

app.get('/', (req, res) => {
    if (req.session.username) {
        res.send({
            message: 'This is your personal data ' + req.session.username
        })
    }
    else {
        res.send({
            message: 'Your session has expired, please try to signup'
        })
    }
});

app.get('/signup/:username', (req, res) => {
    const username = req.params.username;
    req.session.username = username;

    res.send({
        message: 'You have been authenticated'
    })
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});