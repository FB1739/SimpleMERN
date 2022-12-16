const config = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    dbConfig: {
        port: process.env.DB_PORT,
        dbName: process.env.DB_NAME,
        host: process.env.DB_HOST
    }
};

module.exports = config