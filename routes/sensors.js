const express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');

// TODO: default route for sensors
router.route('/').get((req, res, next) => {
    // res.send(resources.pi.sensors);
    req.result = resources.pi.sensors;
    next();
});

// TODO: route for temperature
router.route('/temperature').get((req, res, next) => {
    // res.send(resources.pi.sensors.temperature);
    req.result = resources.pi.sensors.temperature;
    next();
});

// TODO: route for humidity
router.route('/humidity').get((req, res, next) => {
    // res.send(resources.pi.sensors.humidity);
    req.result = resources.pi.sensors.humidity;
    next();
});

module.exports = router;