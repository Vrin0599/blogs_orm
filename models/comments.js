"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comments.belongsTo(models.blogs);
    }
  }
  comments.init(
    {
      comments: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      blogId: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "blogs",
          key: "id",
        },
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
      modelName: "comments",
    }
  );
  return comments;
};
