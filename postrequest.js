const express = require('express');
const bodyParser = require('body-parser')
const app = express(); 
app.use(bodyParser.json());             //middleware
app.post('/data', (req, res) => {
    console.log(req.body)
    console.log(req.headers.authorization)
    res.json({
        msg: "2+2=4"
    })
})

app.listen(3001)

//get query params

app.use(bodyParser.json());             //middleware
app.post('/data2', (req, res) => {
    const msg=req.query.message
    console.log(msg)
    console.log(req.headers.authorization)
    res.json({
        msg: "2+2=4"
    })
})

app.listen(3002)