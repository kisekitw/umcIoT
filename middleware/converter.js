const msgpack = require('msgpack5')(),
    encode = msgpack.encode,
    json2html = require('node-json2html');

module.exports = () => {
    return (req, res, next) => {
        console.log('Representation converter middleware called!');

        if (req.result) {

            // TODO: read json
            if (req.accepts('json')) {
                console.log('JSON representation selected.');

                res.send(req.result);
                return;
            }

            // TODO: read html
            if (req.accepts('html')) {
                console.log('HTML representation selected.');

                var transform = {
                    'tag': 'div',
                    'html': '${name}:${value}'
                };
                res.send(json2html.transform(req.result, transform));

                return;
            }

            // TODO: read json
            if (req.accepts('application/x-msgpack')) {
                console.log('MessagePack representation selected ...');
                res.type('application/x-msgpack');
                res.send(encode(req.result));
                return;
            }
        } else {
            next();
        }
    };
};