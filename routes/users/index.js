const express = require("express");
const router = express.Router();
const { users } = require("../../models");

router.post("/create", async (req, res, next) => {
  try {
    const { fullname, email } = req.body;
    if (!fullname || !email) {
      return reject("Please enter fullname and email then proceed.");
    }
    const userDetails = await users.create({
      fullname: fullname,
      email: email,
    });
    res.send(200, userDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
