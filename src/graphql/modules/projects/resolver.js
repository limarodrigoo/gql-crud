const {
  queryProjects,
  queryProjectById,
  createNewProject,
  projectUpdate,
  projectDelete,
  queryUser,
} = require("./service");

module.exports = {
  Project: {
    userData: queryUser,
  },
  Query: {
    projects: queryProjects,
    project: queryProjectById,
  },
  Mutation: {
    createProject: createNewProject,
    updateProject: projectUpdate,
    deleteProject: projectDelete,
  },
};
