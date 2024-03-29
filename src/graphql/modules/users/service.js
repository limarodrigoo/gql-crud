const {
  findAllUsers,
  findUserById,
  createNewUser,
  userUpdate,
  userDelete,
} = require("./repository");

const queryUsers = async () => {
  const user = await findAllUsers();
  if (user) {
    return user;
  }
  throw new Error("Users not found");
};

const queryUserById = async (_, { id }) => {
  const user = await findUserById(id);
  if (user) {
    return user;
  }
  throw new Error("User not found");
};

const createUser = (_, { data }) => createNewUser(data);

const updateUser = async (_, { id, data }) => {
  const [result] = userUpdate(id, data);
  if (result > 0) return true;
  return false;
};

const updateHourRate = async (_, { id, hourRate }) => {
  const { dataValues } = await findUserById(id);
  dataValues.hourlyRate = hourRate;
  const result = await userUpdate({ dataValues }, { where: { id } });
  if (result > 0) return true;
  return false;
};

const deleteUser = async (_, { id }) => {
  const deleted = await userDelete(id);
  if (deleted) {
    return true;
  }
  return false;
};

module.exports = {
  queryUsers,
  queryUserById,
  createUser,
  updateUser,
  updateHourRate,
  deleteUser,
};
