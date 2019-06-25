const express = require("express");
const router = express.Router();

const linkModdel = require("../models/db/link");

const extension = require("../helper/extension");

router.get("/", async (req, res) => {
  try {
    const data = await linkModdel.find({});
    // console.log(extension.return.successResult(data));
    res.json(extension.return.successResult(data));
  } catch (err) {
    res.json(extension.return.errorResult(err, "error"));
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;

  try {
    const link = new linkModdel({
      title: title
    });

    var data = await link.save();
    // console.log(extension.return.successResult(data));
    res.json(extension.return.successResult(data));
  } catch (err) {
    res.json(extension.return.errorResult(err, "error"));
  }
});

module.exports = router;
