const mongoose = require("mongoose")

async function connectDb({host, port, dbName}) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    mongoose.connect(uri, {useNewUrlParser: true})
}

module.exports = connectDb