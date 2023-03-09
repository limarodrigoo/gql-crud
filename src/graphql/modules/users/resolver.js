const {
  queryUsers,
  queryUserById,
  createUser,
  updateUser,
  updateHourRate,
  deleteUser,
} = require("./service");

module.exports = {
  User: {
    fullName: (user) => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: queryUsers,
    user: queryUserById,
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    updateHourRate: updateHourRate,
    deleteUser: deleteUser,
  },
};
