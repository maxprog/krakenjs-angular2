const Test = require('ava');
const DB = require('../inmemorydb');

const USER_TOM = {
    id: 12345,
    name: 'Tom',
    login: 'tom'
};

Test.before(t => {
    DB.init();
});

Test('inser new user', t => {
    t.plan(2);
    let user = DB.insert(USER_TOM);
    t.truthy(user && user.login === 'tom');
    user = DB.findByLogin('tom');
    t.truthy(user && user.length > 0 && user[0].login === 'tom');
});

Test('update existing user', t => {
    t.plan(3);
    let user = DB.insert(Object.assign({ avatar_url: 'abcde' }, USER_TOM));
    t.truthy(user && user.login === 'tom', true);
    user = DB.findByLogin('tom');
    t.truthy(user && user.length > 0 && user[0].login === 'tom');
    t.truthy(user[0].avatar_url === 'abcde');
});
