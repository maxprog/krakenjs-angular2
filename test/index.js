/*global describe:false, it:false, beforeEach:false, afterEach:false*/
const Test = require('ava');
const Kraken = require('kraken-js');
const Express = require('express');
const Path = require('path');
const Request = require('supertest');

let App;
let mock;

Test.cb.beforeEach(t => {
    App = Express();
    App.on('start', t.end);
    App.use(Kraken({
        basedir: Path.resolve(__dirname, '..')
    }));

    mock = App.listen(9000);
});

Test.cb.afterEach(t => {
    mock.close(t.end);
});

Test.cb('index', t => {
    Request(mock)
        .get('/index')
        .expect(200)
        .expect('Content-Type', /application\/json/)
        .expect(/{"name":"index"}/)
        .end((err, res) => {
            t.end(err);
        });
});
