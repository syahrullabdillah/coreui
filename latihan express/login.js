const express = require('express') //include Expressjs
const app = express() //create an Expressjs app
const bodyParser = require('body-parser'); //midleware

app.use(bodyParser.urlencoded({extended: false}));

//reute to homepage
app.get('/',(req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    //Insert Login Code Here
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

const port = 3000 //port we will listen on

//function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));