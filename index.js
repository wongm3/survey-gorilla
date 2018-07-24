require('dotenv').config();
const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.all(['/api/*'], (req, res) => {
    console.log(process.env.API_HOST + req.url);
    req.pipe(request(process.env.API_HOST + req.url)).pipe(res);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    console.log('test');
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Survery Gorilla listening on ${port}`);