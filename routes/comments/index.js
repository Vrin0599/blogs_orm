const express = require("express");
const router = express.Router();

const { comments } = require("../../models");

router.post("/create", async (req, res, next) => {
  try {
    const { message, blogId, userId } = req.body;
    console.log(message, blogId, userId);
    const publishComments = await comments.create({
      comments: message,
      blogId: blogId,
      createdBy: userId,
      updatedBy: userId,
    });
    res.send(200, publishComments);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const getComments = await comments.findAll();
    res.send(200, getComments);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
