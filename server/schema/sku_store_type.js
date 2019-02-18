const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} = graphql;

const SKUStoreType= new GraphQLObjectType({
    name: 'SKUStoreDetails',
    fields: {
        skuNumber: { type: GraphQLString },
        storeNumber: { type: GraphQLInt },
        permanentPrice: { type: GraphQLFloat },
        temporaryPrice: { type: GraphQLFloat },
        tempPriceExpDate: { type: GraphQLString },
        landedCost: { type: GraphQLFloat },
        inventory: { type: GraphQLInt }
    }
});

module.exports = SKUStoreType;
