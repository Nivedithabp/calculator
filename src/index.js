// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// const port = 3000;
// app.get('/',(req,res) => {
//     res.send("Arithmetic service - hello world!");
// });
// app.listeners(port);
const express = require('express');
const cors = require('cors');
const {add , sub , product , div} = require("./arithmetica");
const path = require('path');

const app = express();
app.use(cors());
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Arithmetic service');
});
app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add (n,m);
    res.json(sum);
});

app.get('/sub/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = sub (n,m);
    res.json(sum);
});

app.get('/product/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = product (n,m);
    res.json(sum);
});

app.get('/div/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = div (n,m);
    res.json(sum);
});

app.listen(port, () => {
    console.log(`Server is running on the  http://localhost:${port}`);
});
