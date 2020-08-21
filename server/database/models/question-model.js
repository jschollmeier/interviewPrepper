const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
 title: String,
 content: String
 
});

 
module.exports = mongoose.model("Question", questionSchema);

