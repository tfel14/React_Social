const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId, Array } = Schema.Types;

const postSchema = new Schema({
    desc: {type: String},
    photo: {type: String},
    date: {type: String},
    userid: {type: ObjectId, ref: 'users'},
    likes: {type: Number},
    comments: {type: Number}
})

postSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('posts', postSchema);

