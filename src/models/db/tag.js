const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  title: {
    type: String
  },
  name: {
    type: String
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

module.exports = mongoose.model("tag", tagSchema);
