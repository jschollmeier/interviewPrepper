const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
  algorithm: {
    type: String,
    required: true,
    
  },
  
  response: {
    type: String,
    required: true
  }
});

const Algorithm = mongoose.model("questions", algorithmSchema);
module.exports = Algorithm;

