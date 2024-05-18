const { DB_USER } = require("../../../constant/config");
const { DB_INSTANCE } = require("../../../database");


const list = async (req, res, next) => {
    try {
        try {
            // console.log(testdta, DB_USER);
            await DB_INSTANCE.authenticate();
            console.log(" connection success ful");

        } catch( error) {
            console.log("error ===", error);
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    list
}