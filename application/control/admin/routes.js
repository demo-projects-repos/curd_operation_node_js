const adminRouter = require('express').Router();
const { list } = require('./controller');


// All Routes Related to control Routes
adminRouter.get('/list', list);

module.exports = adminRouter;