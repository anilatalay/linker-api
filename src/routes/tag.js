const express = require("express");
const router = express.Router();

const tagModdel = require("../models/db/tag");

const extension = require("../helper/extension");

router.get("/", async (req, res) => {
  try {
    const data = await tagModdel.find({});
    res.json(extension.return.successResult(data));
  } catch (err) {
    res.json(extension.return.errorResult(err, "error"));
  }
});

module.exports = router;
