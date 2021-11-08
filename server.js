const express = require('express')
const app = express()
const port = 3000

let eth_address = "null";

app.get('/set_address', (req, res) => {
    eth_address = req.query.address;
    res.sendStatus(200);
});

app.get('/address', (req, res) => {
  res.status(200).send(eth_address);
});

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});