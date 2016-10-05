let indexController = require('../controllers/index');

module.exports = function (router) {
    router.get('/index', indexController);
}
