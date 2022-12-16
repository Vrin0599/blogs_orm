const { subscribers, users } = require("../models");

const createSubscribers = ({ author_id, follower_id, status }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createSubscribers = await subscribers.create({
        author_id: author_id,
        follower_id: follower_id,
        status: status,
      });
      resolve(createSubscribers);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getSubscribers = ({ authorId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getSubscribers = await subscribers.findAll({
        attributes: ["follower_id"],
        where: {
          author_id: authorId,
        },
        include: [
          {
            attributes: ["fullname"],
            model: users,
          },
        ],
      });
      resolve(getSubscribers);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getSubscribers, createSubscribers };
