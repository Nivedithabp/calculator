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
const app = express();
const port = 3000; // or whichever port you want to use

app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Now, you don't need to manually define a route for "index.html"
// Express will automatically serve "index.html" from the "public" folder when the base URL is accessed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/test', (req, res) => {
    res.send('Hello World! test');
  });
  

app.get('/add/:n/:m',(req,res)=>{
    res.json(Number(req.params.n) + Number(req.params.m));
});

