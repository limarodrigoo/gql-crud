const {
  queryProjects,
  queryProjectById,
  createNewProject,
  projectUpdate,
  projectDelete,
} = require("./service");

module.exports = {
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
