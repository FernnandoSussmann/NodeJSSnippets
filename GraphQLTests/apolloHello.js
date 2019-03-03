const { ApolloServer } = require('apollo-server');

const typeDefs = [`
type Query {
   hello: String
}

schema {
    query: Query
}`];

var resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
