const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// mongoose.connect('mongodb://localhost:27017/MessagingAppDB',{ useNewUrlParser: true, useUnifiedTopology: true })
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;

const userSchema = new Schema({
    email: {
        type: String,
        // unique: true,
        // required: true
    },

    username: {
        type: String,
        // unique: true,
        // required: true
    },

    password: {
        type: String,
        // required: true
    },
    pfp: {type: String, default: 'https://ia801703.us.archive.org/6/items/twitter-default-pfp/e.png'}
});

userSchema.method('matchPassword', function (password) {
    return bcrypt.compare(password, this.password);
})



userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('users', userSchema);