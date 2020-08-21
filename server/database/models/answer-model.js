const mongoose = require("mongoose");
const { model } = require("./question-model");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
 title:{
     type:String,
 },
 content:{
     type:String
 }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;

