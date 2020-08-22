const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
 title:{ type:String, required: true},
    

 content:{type: String, required: true}
     
 
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;

