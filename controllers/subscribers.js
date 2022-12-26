const { Sequelize } = require("sequelize");
const { subscribers, users, blogs } = require("../models");

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

// const getSubscribers = ({ authorId }) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const getSubscribers = await subscribers.findAll({
//         attributes: ["follower_id"],
//         where: {
//           author_id: authorId,
//         },
//         include: [
//           {
//             attributes: ["fullname"],
//             model: users,
//           },
//         ],
//       });
//       resolve(getSubscribers);
//     } catch (err) {
//       console.log(err);
//       reject(err);
//     }
//   });
// };

const getSubscribers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      // const getSubscribers = await subscribers.findAll({
      //   subQuery: false,
      //   attributes: [
      //     "author_id",
      //     "follower_id",
      //     [
      //       Sequelize.fn("COUNT", Sequelize.col("subscribers.id")),
      //       "subscribersCount",
      //     ],
      //   ],
      //   include: [
      //     {
      //       required: false,
      //       model: subscribers,
      //       attributes: [],
      //     },
      //     {
      //       as: "data",
      //       required: false,
      //       model: subscribers,
      //       attributes: ["id"],
      //     },
      //   ],
      //   group: ["blogs.id", "data.id"],
      // });

      const getUsers = await users.findAll({
        attributes: [
          "fullname",
          "email",
          [
            Sequelize.fn("COUNT", Sequelize.col("subscribers.id")),
            "subscribersCount",
          ],
        ],
        include: [
          {
            required: false,
            model: subscribers,
            attributes: [],
            include: [
              {
                required: false,
                model: blogs,
                attributes: ["id"],
              },
            ],
          },
        ],
        group: ["subscribers.id", "users.id", "blogs.id"],
      });

      resolve(getUsers);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { getSubscribers, createSubscribers };
