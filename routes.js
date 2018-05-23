const routes = require('next-routes')();

routes
    .add('/app', '/overview')
    .add('/app-deposit', '/deposit')
    .add('/app-user', '/app')
    .add('/whitepaper', '/whitepaper')
    .add('/index', '/home');

module.exports = routes;