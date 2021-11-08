const express = require('express')
const app = express()
const port = 3000

let eth_address = "null";

app.get('/set_address', (req, res) => {
    eth_address = req.query.address;
    res.sendStatus(200);
});

app.get('/ip', (req, res) => {
    'use strict';

    const { networkInterfaces } = require('os');
    
    const nets = networkInterfaces();
    const results = Object.create(null); // Or just '{}', an empty object
    
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }

    res.send(results["Wi-Fi"][0]);
});

app.get('/address', (req, res) => {
  res.status(200).send(eth_address);
});


app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});