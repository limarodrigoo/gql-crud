const { Projects, User } = require("../../../db/models/index");

module.exports = {
  // Project: {
  //   userId: (id) => User.findByPk(id),
  // },
  Query: {
    projects: async () => {
      const result = await Projects.findAll();
      console.log(result);
      return result;
    },
    project: (_, { id }) => Projects.findByPk(id),
  },
  Mutation: {
    createProject: (_, { data }) => Projects.create(data),
    updateProject: async (_, { id, data }) => {
      const [result] = await Projects.update(data, {
        where: {
          id,
        },
      });
      if (result > 0) return true;
      return false;
    },
    deleteProject: async (_, { id }) => {
      const deleted = await Projects.destroy({
        where: {
          id,
        },
      });
      return !!deleted;
    },
  },
};
