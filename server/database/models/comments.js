const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const commentsSchema = new Schema({
    comment: { type: String, required: true },
    username: { type:String, required: true },
    blogId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
