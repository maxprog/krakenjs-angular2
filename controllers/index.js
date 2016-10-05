let IndexModel = require('../models/index');

module.exports = (req, res) => {

    let model = new IndexModel();
    res.json(model);

};
