const startServer = require("./startServer");
const typeDefs  = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolver.js");

startServer({typeDefs, resolvers})