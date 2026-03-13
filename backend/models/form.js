const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  type: String,
  label: String,
  placeholder: String,
  required: Boolean,
  options: [String]
}, { _id: false });

const formSchema = new mongoose.Schema({

  title: String,

  description: String,

  fields: [fieldSchema],

  theme: {
    background: String,
    buttonColor: String,
    textColor: String,
    fontFamily: String,
    backgroundColor: String
  }

}, { timestamps: true });

module.exports = mongoose.model("form", formSchema);