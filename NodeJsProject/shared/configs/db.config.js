const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../entities/user.entitie')
};