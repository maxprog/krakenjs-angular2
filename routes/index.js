const ProfileController = require('../controllers/profile');
const Path = require('path');

module.exports = function (router) {
    router.get('/', function (req, res) {
        res.sendFile('/', {root: Path.resolve(__dirname, '../web/')});
    });
    router.get('/home', function (req, res) {
        res.sendFile('/', {root: Path.resolve(__dirname, '../web/')});
    });
    router.get('/profile', ProfileController.getProfile);
    router.post('/profile', ProfileController.postProfile);
}
