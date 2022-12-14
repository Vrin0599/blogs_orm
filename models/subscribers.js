"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subscribers.belongsTo(models.users, { foreignKey: "author_id" });
    }
  }
  subscribers.init(
    {
      status: {
        type: DataTypes.BOOLEAN,
      },
      author_id: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
      follower_id: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "subscribers",
    }
  );
  return subscribers;
};
