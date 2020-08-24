const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
 title:{ type:String, required: true},

 content: {type:String, required: true},

 examples: {type:Array, required: false},

 answer: {type:String, required: true}
     
 
 
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question

