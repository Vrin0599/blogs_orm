const express = require("express");
const router = express.Router();
const users = require("../../models/users");

router.post("/create", async (req, res, next) => {
  try {
    console.log("here");
    const res = await users.create({
      fullname: "vrinda",
      email: "vrinda@gmail.com",
    });
    console.log("here1");
    console.log(res);
    res.send(200, res);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
