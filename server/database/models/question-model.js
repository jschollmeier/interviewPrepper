const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
 title:{
    type:String,
 },
 content: {
     type:String
 }
 
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question

