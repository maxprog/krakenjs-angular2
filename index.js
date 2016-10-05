const Express = require('express');
const Kraken = require('kraken-js');

let options = {
    onconfig: (config, next) => next(null, config)
};
let App = module.exports = Express();
App.use(Kraken(options));
App.on('start', () => {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', App.kraken.get('env:env'));
});
