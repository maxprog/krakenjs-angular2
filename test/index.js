/*global describe:false, it:false, beforeEach:false, afterEach:false*/
const Test = require('ava');
const Kraken = require('kraken-js');
const Express = require('express');
const Path = require('path');
const Request = require('supertest');
const InMemoryDB = require('../inmemorydb');

let App;
let mock;
const ANGULAR_CSRF_COOKIE = 'XSRF-TOKEN';
const ANGULAR_CSRF_HEADER = 'X-XSRF-TOKEN';

function mapCookies(cookies) {
    return cookies.map(function (r) {
        return r.replace("; path=/; httponly", "");
    }).join("; ");
};

function findToken(cookies) {
    //cookies = decodeURIComponent(cookies);
    let token = cookies.find(cookie => ~cookie.indexOf(ANGULAR_CSRF_COOKIE))
            .split(';')[0].split('=')[1];
    return decodeURIComponent(token);
}

Test.cb.before(t => {
    App = Express();
    App.on('start', t.end);
    App.use(Kraken({
        basedir: Path.resolve(__dirname, '..'),
        onconfig: (config, next) => {
            InMemoryDB.init();
            next(null, config);
        }
    }));
    mock = App.listen(9000, 'localhost');
});

Test.cb.after(t => {
    mock.close(t.end);
});

Test.cb('post profile and get profile', t => {
    let csrf_token;
    //First page
    Request(mock)
        .get('/')
        .expect(200)
        .expect(res => {
            csrf_token = findToken(res.headers['set-cookie']);
        })
        .end((err, res) => {
            //Send the post request
            Request(mock)
                .post('/profile')
                .set('cookie', mapCookies(res.headers['set-cookie']))
                .set(ANGULAR_CSRF_HEADER, csrf_token)
                .send({
                    id: 12345,
                    login: 'abcdef',
                    name: 'Hola',
                    avatar_url: 'some url'
                })
                .expect(200)
                .expect('Content-Type', /application\/json/)
                .expect(function (res) {
                    t.truthy(res.body.login === 'abcdef', 'POST profile success');
                })
                .end((err, res) => {
                    //Get the data
                    Request(mock)
                        .get('/profile?login=abcdef')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)
                        .expect(function (res) {
                            t.truthy(res.body.login === 'abcdef', 'Get profile success');
                        })
                        .end((err, res) => {
                            t.end(err);
                        });

                });
        });

});
