const { User } = require("../../../db/models/index");

const findAllUsers = () => User.findAll();

const findUserById = async (id) => User.findByPk(id);

const createNewUser = (data) => User.create(data);

const userUpdate = (id, data) =>
  User.update(data, {
    where: {
      id,
    },
  });

const userDelete = (id) =>
  User.destroy({
    where: {
      id,
    },
  });

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  userUpdate,
  userDelete,
};
