const { Projects } = require("../../../db/models/index");

const findAllProjects = () => Projects.findAll();

const findProjectById = (id) => Projects.findByPk(id);

const createProject = (data) => Projects.create(data);

const updateProject = async (id, data) => {
  const result = Projects.update(data, {
    where: {
      id,
    },
  });
  return result;
};

const deleteProject = (id) =>
  Projects.destroy({
    where: {
      id,
    },
  });
module.exports = {
  findAllProjects,
  findProjectById,
  createProject,
  updateProject,
  deleteProject,
};
