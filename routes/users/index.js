const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");

router.post("/create", async (req, res, next) => {
  try {
    const { fullname, email } = req.body;

    const userDetails = await controllers.createUser({
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
