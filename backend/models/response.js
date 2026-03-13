const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({

  formId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"form"
  },

  answers:Object,

  submittedAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model("response",responseSchema);