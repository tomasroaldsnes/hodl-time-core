const routes = require('next-routes')();

routes
    .add('/app', '/app')
    .add('/whitepaper', '/whitepaper')
    .add('/index', '/home');

module.exports = routes;