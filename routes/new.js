const express = require("express");
const router = express.Router();

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

module.exports = router;
