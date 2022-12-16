const { getBlogs, createBlog } = require("./blogs");
const { getComments, createComment } = require("./comments");
const { createUser } = require("./users");
const { getSubscribers, createSubscribers } = require("./subscribers");

module.exports = {
  getBlogs,
  createBlog,
  getComments,
  createComment,
  createUser,
  getSubscribers,
  createSubscribers,
};
