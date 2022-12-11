"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  blogs.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdBy: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      updatedBy: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "blogs",
    }
  );
  return blogs;
};
