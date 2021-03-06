const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query { 
        hello: String
        }
`);

var root = { hello: () => " Hello World"  };

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
