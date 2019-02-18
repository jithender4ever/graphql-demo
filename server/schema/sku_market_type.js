const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} = graphql;

const ProductType = require('./product_type');
const THDProductData = require('../../database');
const thdProduct = new THDProductData();

const SKUMarketType = new GraphQLObjectType({
   name: 'SKUMarket',
   fields: {
       skuNumber: { type: GraphQLString },
       marketNumber: { type: GraphQLInt },
       permanentPrice: { type: GraphQLFloat },
       temporaryPrice: { type: GraphQLFloat },
       tempPriceExpDate: { type: GraphQLString },
       landedCost: { type: GraphQLFloat },
       inventory: { type: GraphQLInt },
       product: {
           type: ProductType,
           resolve(parentValue, args) {
               return thdProduct.getProduct(parentValue.skuNumber)[0];
           }
       }
   }
});

module.exports = SKUMarketType;
