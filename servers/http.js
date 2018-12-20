const express = require('express'),
    actuatorsRoutes = require('./../routes/actuators'),
    sensorsRoutes = require('./../routes/sensors'),
    resource = require('./../resources/model'),
    cors = require('cors'),
    converter = require('./../middleware/converter'),
    bodyParser = require('body-parser');

// TODO: configure server
const app = express();

app.use(bodyParser.json());
app.use(cors());

// TODO: binding route
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorsRoutes);

app.get('/pi', (req, res) => {
    res.send('UMC IoT Service');
})

app.use(converter());

module.exports = app;