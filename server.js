const httpServer = require('./servers/http'),
    resources = require('./resources/model'),
    dhtPlugin = require('./plugins/internal/DHT22SensorPlugin'),
    ledPlugin = require('./plugins/internal/ledsPlugin'),
    ledPlugin2 = require('./plugins/internal/ledsPlugin2');


dhtPlugin.start({
    'simulate': false,
    'frequency': 5000
});
ledPlugin.start({
    'simulate': false,
    'frequency': 2000
});
ledPlugin2.start({
    'simulate': false,
    'frequency': 2000
})


const server = httpServer.listen(resources.pi.port, () => {
    console.log('Your IoT Pi is up and running on port %s', resources.pi.port);
})