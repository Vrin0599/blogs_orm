const express = require("express");
const controllers = require("../../controllers");
const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const { title, content, userId } = req.body;
    const createdBlog = await controllers.createBlog({
      title,
      content,
      userId,
    });
    res.send(200, createdBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const blogsData = await controllers.getBlogs();
    res.send(200, blogsData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
