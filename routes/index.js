const express = require("express");
const router = express.Router();

const userRouters = require("./users");
const blogRouters = require("./blogs");
const commentRouters = require("./comments");
const subscriberRouters = require("./subscribers");

router.use("/users", userRouters);
router.use("/blogs", blogRouters);
router.use("/comments", commentRouters);
router.use("/subscribers", subscriberRouters);

module.exports = router;
