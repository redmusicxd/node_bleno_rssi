const express = require('express');
const app = express();
app.use(express.json())

let rssi = 0;
let lastUpdate;
app.post('/rssi', (req, res) => {
    rssi = req.body.rssi;
    lastUpdate = new Date();
    res.json({rssi: Number(req.body.rssi)})
    if(req.body.rssi <= -66){
        console.log(req.body.rssi);
    }
    else{
        console.log('close');
        console.log(req.body.rssi);
    }
})
app.get('/rssi', (req, res) => {
    res.status(200).json({rssi: rssi});
})
app.listen('3000', () => {
    console.log('Started');
})