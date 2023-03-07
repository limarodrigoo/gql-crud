const { User } = require("../../../db/models/index");

module.exports = {
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findByPk(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) =>
      User.update(
        { data },
        {
          where: {
            id,
          },
        }
      ),
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
