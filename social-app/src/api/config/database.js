const mongoose = require('mongoose');
const config = require('./config');

export default () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
};

