const express = require("express");
const router = express.Router();
const controllers = require("../../controllers");

router.post("/create", async (req, res, next) => {
  try {
    const { message, blogId, userId } = req.body;
    const publishComments = await controllers.createComments({
      message: message,
      blogId: blogId,
      userId: userId,
    });

    res.send(200, publishComments);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const getComments = await controllers.getComments();
    res.send(200, getComments);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
