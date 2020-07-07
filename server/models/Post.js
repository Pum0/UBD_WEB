const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');
const config = require("../config/key");

const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

autoIncrement.initialize(connection, { useNewUrlParser: true });

const postSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    seq: {
        type: Number
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

postSchema.plugin(autoIncrement.plugin, {
    model: 'postSchemaModel',
    field: 'seq',
    startAt: 1,
    increment: 1
})

const Post = mongoose.model('Post', postSchema)

module.exports = { Post }

