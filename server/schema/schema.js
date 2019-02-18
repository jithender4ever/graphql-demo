const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const queries = require('./root_query_type');
const mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: queries,
  mutation: mutations
});
