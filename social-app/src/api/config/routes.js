const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/user', router.user.get);
    app.use('/api/user/register', router.user.post);
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};