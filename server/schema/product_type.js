const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        skuNumber: { type: GraphQLString },
        skuDescription: { type: GraphQLString },
        onlineViews: { type: GraphQLInt }
    }
});

module.exports = ProductType;
