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
      // define association here
    }
  }
  Projects.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      // author: {
      //   type: DataTypes.INTEGER,
      //   foreingKey: true,
      // }
    },
    {
      sequelize,
      modelName: "Projects",
    }
  );
  Projects.belongsTo(Model.User, { foreignKey: "user_id" });
  return Projects;
};

module.exports = Projects;
