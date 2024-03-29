const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("link", linkSchema);
