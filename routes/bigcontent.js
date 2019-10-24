const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/pages/project/theproject/", function(req, res, next) {
  res.render("theproject", { title: "Express" });
});

module.exports = router;
