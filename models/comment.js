const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: 'Property',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
