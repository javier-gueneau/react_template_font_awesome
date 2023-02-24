const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    comment:{
        type:String,
        required:[true,"Comment is required aa"]
    },
    user:{
        type:String
    }
})

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;