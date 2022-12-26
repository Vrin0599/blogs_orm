const express = require("express");
const router = express.Router();

const controllers = require("../../controllers");

router.post("/create", async (req, res, next) => {
  try {
    const { authorId, followerId, status } = req.body;
    const createSubscribers = await controllers.createSubscribers({
      author_id: authorId,
      follower_id: followerId,
      status: status,
    });
    res.send(200, createSubscribers);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const getSubscribers = await controllers.getSubscribers({
      authorId: req.body.authorId,
    });
    res.send(200, getSubscribers);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
