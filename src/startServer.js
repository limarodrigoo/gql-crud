const { ApolloServer } = require("apollo-server");

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server running on ${url}`));
}

module.exports = startServer;
