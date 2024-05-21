const express = require("express");
const router = express.Router();

const user = require("./model/user/user.controller");
router.use("/user", user);

const category = require("./model/category/category.controller");
router.use("/category", category);

const ranking = require("./model/ranking/ranking.controller");
router.use("/ranking", category);

module.exports = router;