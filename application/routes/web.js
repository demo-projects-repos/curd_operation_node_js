const express = require('express');
const adminRouter = require('../control/admin/routes');
const route = express.Router();


// use to sagrigate the different-2 control routes
route.use('/admin', adminRouter);


module.exports = route;
