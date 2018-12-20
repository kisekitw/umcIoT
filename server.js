const httpServer = require('./servers/http'),
    resources = require('./resources/model'),
    dhtPlugin = require('./plugins/internal/DHT22SensorPlugin');


dhtPlugin.start({'simulate': true, 'frequency': 2000});

const server = httpServer.listen(resources.pi.port, () => {
    console.log('Your IoT Pi is up and running on port %s', resources.pi.port);
})