const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const postSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        maxlength: 40,
        required: [true, '제목을 입력해주세요.']
    },

    // number: {
    //     type: Number,
    // },

    content: {
        type: String,
        maxlength: 500,
        required: [true, '내용을 입력해주세요.']
    },

    viewcount: {
        type: Number,
        default: 0
    },

    images: {
        type: Array,
        default: []
    },

    created: {
        type: Date,
        default: moment()
    }


})

const Post = mongoose.model('Post', postSchema)

module.exports = { Post }

