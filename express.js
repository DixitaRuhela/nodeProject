const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const port = 3001;

// Simple "Hello World" route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Sum function that returns the result
const sum = (n) => {
    return n + 10;
};

// New route for calculating the sum
app.get('/sum', (req, res) => {
    const ans = parseInt(req.query.n);  // Ensure it's a number
    const result = sum(ans);
    res.send("Hi, your answer is " + result);
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
