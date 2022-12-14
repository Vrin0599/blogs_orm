const express = require("express");
// const { Sequelize } = require("sequelize");
const router = express.Router();

const { blogs, comments } = require("../../models");

router.post("/create", async (req, res, next) => {
  try {
    const { title, content, userId } = req.body;
    if (!title || !content) {
      return reject("Please enter the title & content of the blog");
    }
    const createBlogs = await blogs.create({
      title: title,
      content: content,
      createdBy: userId,
      updatedBy: userId,
    });
    res.send(200, createBlogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const getBlogs = await blogs.findAll({
      attributes: ["title", "content"],
      include: [
        {
          model: comments,
          attributes: ["comments"],
        },
      ],
    });
    console.log(getBlogs);
    res.send(200, getBlogs);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;