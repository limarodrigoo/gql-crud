const {
  findAllProjects,
  findProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("./repository");

const { findUserById } = require("../users/repository");

const queryProjects = async () => {
  const projects = await findAllProjects();
  if (projects) {
    return projects
  } 
  throw new Error("Projects not found")
};

const queryProjectById = async (_, { id }) => {
  const project = await findProjectById(id);
  if (project) {
    return project;
  }
  throw new Error("Project not found");
};

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
