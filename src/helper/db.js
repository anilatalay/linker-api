const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost/linker", { useNewUrlParser: true });

  mongoose.connection.on("open", () => {
    console.log("Mongo: Connected");
  });
  mongoose.connection.on("error", err => {
    console.log("Mongo: Error", err);
  });
};
