const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')
const Query = require('./resolvers/Query')
const {animals, mainCards, categories} = require('./db')
const Animal = require('./resolvers/Animal')
const Mutation = require('./resolvers/Mutation')
const Category = require('./resolvers/Category')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Animal,
        Category,
        Mutation
    },
    context: {
        mainCards,
        animals,
        categories
    }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});