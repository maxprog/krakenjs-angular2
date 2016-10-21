/**
 * This inmemory db is only for tutorial/example purpose.
 * For real use case and production ready environment use products like redis, mongodb etc.
 * This assumes
 */
const Loki = require('lokijs');
let DB;
let Users;
let initialized = false;

function createDb() {
    if (!DB) {
        DB = new Loki('GithubProfile');
    }
    return DB;
}

function init() {
    if (initialized) {
        return;
    }
    initialized = true;
    let db = createDb();
    Users = db.addCollection('users', { indices: ['id','login'] });
}

function insert(user) {
    let result;
    if(!Users) {
        return;
    }
    if (user && user.login) {
        let currUser = findByLogin(user.login);
        if (currUser && currUser.length > 0) {
            currUser = Object.assign(currUser[0], user);
            result = Users.update(currUser);
        } else {
            result = Users.insert(user);
        }
        return result;
    }
}

function findByLogin(login) {
    if(!Users) {
        return;
    }
    return Users.find({'login': login})
}

module.exports = {
    init: init,
    insert: insert,
    findByLogin: findByLogin
};
