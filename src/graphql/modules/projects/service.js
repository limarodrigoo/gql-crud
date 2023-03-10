const {
  findAllProjects,
  findProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("./repository");

const { findUserById } = require("../users/repository");

const queryProjects = () => findAllProjects();

const queryProjectById = (_, { id }) => findProjectById(id);

const createNewProject = (_, { data }) => createProject(data);

const projectUpdate = async (_, { id, data }) => {
  const [result] = await updateProject(id, data);
  if (result > 0) return true;
  return false;
};
const projectDelete = async (_, { id }) => {
  const deleted = await deleteProject(id);
  return !!deleted;
};

const queryUser = async ({ dataValues }) => {
  const { dataValues: result } = await findUserById(dataValues.userId);
  return result;
};

module.exports = {
  queryProjects,
  queryProjectById,
  createNewProject,
  projectUpdate,
  projectDelete,
  queryUser,
};
