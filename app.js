const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const port = 8080;

//api middelwares
app.use(express.json()); //accept data in json format
app.use(express.urlencoded()); //decode the data send through html form
app.use(express.static('public')) //to serve our public folder as a static forder


//API ROUTERS
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.post('/formPost', (req, res) => {
    console.log(req.body); //the data we get is in the body of request
    res.send("" + (req.body.firstNum - -req.body.secondNum));
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
});