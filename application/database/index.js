const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_TYPE, DB_USER, DB_PASS } = require('../constant/config');




const DB_INSTANCE = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_TYPE,
    logging: console.log
});




module.exports = {
    DB_INSTANCE
}