const mongoose = requrie('mongoose');
const Schma = mongoose.Schma;

const postSchema = mongoose.Schma({
    writer: {
        type: Schma.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        maxlength: 40,
        required:[true, '제목을 입력해주세요.']
    },

    // number: {
    //     type: Number,
    // },

    content: {
        type: String,
        maxlength: 500,
        required:[true, '내용을 입력해주세요.']
    },

    viewcount:{
        type: number,
        default: 0
    },

    images: {
        type: Array,
        default: []
    },

    created: {
        type: Date,
        default: Date.now
    }


})

const Post = mongoose.model('Post', postSchema)

module.exports = { Post }

