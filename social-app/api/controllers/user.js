const config = require('../config/config');
const utils = require('../utils');
const User = require('../models/User');
module.exports = {
    get: {
        allUsers: (req, res, next) => {
        User.find()
            .then((users) => {res.send(users)})
            // .catch(next)
        },
        profile: (req, res, next) => {
            User.findById(req.params.id)
                .then((user) => {res.send(user)})
                // .catch(next)
        },
        cookies: (req, res, next) => {
            let cookies = req.cookie;
            res.send(cookies)
        },
    },

    post: {
        register: async (req, res, next) => {
            const {email, username, password } = req.body;
            console.log(email, username,password);
            //validate the entries here
            let newUser = await User.create({email, username, password});
            res.send(newUser);
        },

        login: (req, res, next) => {
            const {email, password } = req.body;
            User.findOne({email: email})
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    console.log("logged In!")
                    const token = utils.jwt.createToken({ id: user._id });
                    // res.cookie(config.authCookieName, token,{ maxAge: 900000, httpOnly: true })
                    res.send({user,token});          
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            // const headerToken = req.headers['Content-Type'].split('/')[1]
            const token = req.cookies.token;
            console.log(req.cookies);
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            res.clearCookie('user');
            res.clearCookie('token').send('{"message":"Logout successfull!"}');
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
}