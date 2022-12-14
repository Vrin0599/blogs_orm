const express = require("express");
const router = express.Router();

const { subscribers, users } = require("../../models");

router.post("/create", async (req, res, next) => {
  try {
    const { author_id, follower_id, status } = req.body;
    const createSubscribers = await subscribers.create({
      author_id: author_id,
      follower_id: follower_id,
      status: status,
    });
    res.send(200, createSubscribers);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log("here");
    const getSubscribers = await subscribers.findAll({
      attributes: ["follower_id"],
      where: {
        author_id: req.body.authorId,
      },
      include: [
        {
          attributes: ["fullname"],
          model: users,
        },
      ],
    });
    res.send(200, getSubscribers);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
