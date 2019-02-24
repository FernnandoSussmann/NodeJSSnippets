var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var schema2 = buildSchema(`
    type Query {
        goodbye: String
    }
`);


var root = { hello: () => 'Hello World',
             goodbye: () =>  'Goodbye World'};

console.log(Object.prototype.toString.call(root));

graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});


graphql(schema2, '{ goodbye }', root).then((response) => {
    console.log(response);
});
