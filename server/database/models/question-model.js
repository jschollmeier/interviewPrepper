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

 
module.exports = mongoose.model("Question", questionSchema);

