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

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tag = await tagModdel.findById(id);

    if (!tag) {
      res.json(extension.return.notfoundResult(null, "Tag was not found."));
    } else {
      res.json(extension.return.successResult(link));
    }
  } catch (err) {
    res.json(extension.return.errorResult(err, "error"));
  }
});

module.exports = router;
