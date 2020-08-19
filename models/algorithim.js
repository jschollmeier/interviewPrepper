const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const algorithimSchema = new Schema({
  algorithim: {
    type: String,
    required: true,
    
  },
  
  response: {
    type: String,
    required: true
  }
});

const Algorithim = mongoose.model("questions", algorithimSchema);
module.exports = Algorithim;

