const { Sequelize } = require("sequelize");
const { blogs, comments } = require("../models");

const createBlog = ({ title, content, userId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!title || !content) {
        return reject("Please enter the title & content of the blog");
      }

      const response = await blogs.create({
        title: title,
        content: content,
        createdBy: userId,
        updatedBy: userId,
      });
      resolve(response);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getBlogs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const blogData = await blogs.findAll({
        subQuery: false,
        attributes: [
          "title",
          "content",
          [
            Sequelize.fn("COUNT", Sequelize.col("comments.id")),
            "commentsCount",
          ],
        ],
        include: [
          {
            required: false,
            model: comments,
            attributes: [],
          },
          {
            as: "data",
            required: false,
            model: comments,
            attributes: ["id"],
          },
        ],
        group: ["blogs.id", "data.id"],
      });
      resolve(blogData);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getBlogs, createBlog };
