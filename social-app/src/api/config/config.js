const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://localhost:27017/MessagingAppDB',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];