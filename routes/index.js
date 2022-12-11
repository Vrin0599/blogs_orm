const express = require("express");
const router = express.Router();

const userRouters = require("./users");

router.use("/users", userRouters);

module.exports = router;
