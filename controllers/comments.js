const { comments } = require("../models");

const createComments = ({ message, blogId, userId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(message, blogId, userId);
      const publishComments = await comments.create({
        comments: message,
        blogId: blogId,
        createdBy: userId,
        updatedBy: userId,
      });
      console.log(message, blogId, userId);
      resolve(publishComments);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getComments = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const comment = await comments.findAll();
      resolve(comment);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getComments, createComments };
