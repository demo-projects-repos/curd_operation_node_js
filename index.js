const express = require('express');
const http = require('http');
const { API_PREFIX } = require('./application/constant/config');
const ApplicationRoutes = require('./application/routes/web');
require('dotenv').config();


// create the custom instance
const Instance = () => {
    const app = express();
    app.use(API_PREFIX, ApplicationRoutes);

    return http.createServer(app);

}

application = Instance();

application.listen(process.env.PORT || 8000, () => {
    console.log("lisening on port")

});