var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
module.exports = buildSchema(`

  type Menu {
    _id: ID!
    title: String!
    slug: String!
    description:  String!
  }

  type Query {
    getIvdrips:[Menu!]
    getTherapies:[Menu!]
    getServices:[Menu!]
    getTeams:[Menu!]
  }

  schema {
   query: Query
 }

`);