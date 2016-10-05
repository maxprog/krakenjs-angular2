const App = require('./index');
const Http = require('http');

let Server;

/*
 * Create and start HTTP server.
 */

Server = Http.createServer(App);
Server.listen(process.env.PORT || 8000);
Server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
