const express = require("express");
const router = express.Router();

const user = require("./model/user/user.controller");
router.use("/user", user);

const category = require("./model/category/category.controller");
router.use("/category", category);

module.exports = router;