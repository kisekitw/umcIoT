const express = require('express'),
    router = express.Router(),
    resources = require('./../resources/model');

router.route('/').get((req, res, next) => {
    // res.send(resources.pi.sensors.actuators);
    req.result = resources.pi.actuators;
    next();
});

// TODO: route for leds
router.route('/leds').get((req, res, next) => {
    // res.send(resources.pi.actuators.leds);

    req.result = resources.pi.leds;
    next();
});

// TODO: route for led
router.route('/leds/:id').get((req, res, next) => {
    req.result = resources.pi.actuators.leds[req.params.id];
    next();
}).put(function (req, res, next) {
    var selectedLed = resources.pi.actuators.leds[req.params.id];
    selectedLed.value = req.body.value;
    req.result = selectedLed;
    next();
});

module.exports = router;