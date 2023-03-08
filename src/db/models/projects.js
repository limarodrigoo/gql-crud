"use strict";
const { Model } = require("sequelize");
const Projects = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Projects.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        foreingKey: true,
      }
    },
    {
      sequelize,
      modelName: "Projects",
      freezeTableName: true
    }
  );
  return Projects;
};

module.exports = Projects;
