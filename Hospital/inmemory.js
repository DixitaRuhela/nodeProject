const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
app.use(bodyParser.json());
var users = [{
    name: "Dixita",
    kidney: [{
        healthy: true
    }, { unhealthy: false }]
}]
//get kidney
app.get('/kidney', (req, res) => {
    const dixitaKidney = users[0].kidney;
    const numOfKidney = dixitaKidney.length;
    let noOfHealthyKidney = 0;
    for (let i = 0; i < numOfKidney; i++) {
        if (dixitaKidney[i].healthy) {
            noOfHealthyKidney = noOfHealthyKidney + 1

        }

    }
    const noOfUnhealthyKidney = numOfKidney - noOfHealthyKidney
    res.json({
        numOfKidney,
        noOfUnhealthyKidney,
        noOfHealthyKidney
    })

})

//post kidney
app.post('/kidney', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/kidney', (req, res) => {

    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({
        msg: "Success"
    })
})

app.delete('/kidney', (req, res) => {
    
    users[0].kidney = users[0].kidney.filter(i => i.healthy);
    res.json({
        msg: "Success"
    })
})
app.listen(port);