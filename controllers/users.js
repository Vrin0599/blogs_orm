const { users } = require("../models");

const createUser = ({ fullname, email }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!fullname || !email) {
        return reject("Please enter fullname and email then proceed.");
      }
      const userDetails = await users.create({
        fullname: fullname,
        email: email,
      });
      resolve(userDetails);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

module.exports = { createUser };
