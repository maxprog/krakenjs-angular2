let ProfileModel = require('../models/profile');
const InMemoryDB = require('../inmemorydb');

function getProfile (req, res) {

    let model = {};
    let user;
    if (req.query && req.query.login) {
        user = InMemoryDB.findByLogin(req.query.login);
        if (user && user.length > 0) {
            user = user[0];
        }
        model = new ProfileModel(user);
    }
    res.json(model);
};

function postProfile (req, res) {
    let model = {};
    let insertData;
    if (req.body) {
        insertData = new ProfileModel(req.body);
        user = InMemoryDB.insert(insertData);
        model = new ProfileModel(user);
    }
    res.json(model);
};

module.exports = {
    getProfile: getProfile,
    postProfile: postProfile
}
