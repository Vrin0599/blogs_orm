const { Sequelize } = require("sequelize");
const { subscribers, users, blogs } = require("../models");

const createSubscribers = ({ author_id, follower_id, status, blog_id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createSubscribers = await subscribers.create({
        author_id: author_id,
        follower_id: follower_id,
        status: status,
        blog_id: blog_id,
      });
      resolve(createSubscribers);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

const getSubscribers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const getUsers = await users.findAll({
        attributes: [
          "fullname",
          "email",
          // [
          //   Sequelize.fn("COUNT", Sequelize.col("subscribers.author_id")),
          //   "subscribersCount",
          // ],
          [
            Sequelize.literal(`(
                SELECT COUNT(*)
                FROM subscribers
                WHERE
                    subscribers.author_id = users.id
            )`),
            "subscribersCount",
          ],
        ],
        include: [
          {
            required: false,
            model: subscribers,
            attributes: ["id"],
            include: [
              {
                required: false,
                model: blogs,
                attributes: ["title"],
              },
            ],
          },
        ],
        // group: ["subscribers.author_id", "users.id", "blogs.id"],
      });

      resolve(getUsers);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getSubscribers, createSubscribers };
