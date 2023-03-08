const { User } = require("../../../db/models/index");

module.exports = {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findByPk(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: async (_, { id, data }) => {
      const [result] = await User.update(data, {
        where: {
          id,
        },
      });
      if (result > 0) return true;
      return false;
    },
    updateHourRate: async (_, { id, hourRate }) => {
      const { dataValues } = await User.findByPk(id);
      dataValues.hourlyRate = hourRate;
      const result = await User.update(dataValues, { where: { id } });
      if (result > 0) return true;
      return false;
    },
    deleteUser: async (_, { id }) => {
      const deleted = await User.destroy({
        where: {
          id,
        },
      });
      return !!deleted;
    },
  },
};
