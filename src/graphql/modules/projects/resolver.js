const { Projects } = require("../../../db/models/index");

module.exports = {
  Query: {
    projects: () => Projects.findAll(),
    project: (_, { id }) => Projects.findByPk(id),
  },
  Mutation: {
    createProject: (_, { data }) => Projects.create(data),
    updateProject: (_, { id, data }) =>
      Projects.update(
        { data },
        {
          where: {
            id,
          },
        }
      ),
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
