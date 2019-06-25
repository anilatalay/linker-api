const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("link", linkSchema);