// packages
const express = require("express");

// routes
const linkRouter = require("./routes/link");
const tagRouter = require("./routes/tag");

const app = express();

// database
const db = require("./helper/db")();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/links", linkRouter);
app.use("/api/tags", tagRouter);

const server = app.listen(3001, () => {
  var port = server.address().port;
  console.log("link-api listening at port: %s", port);
});
