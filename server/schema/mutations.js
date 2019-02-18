const Axios = require('axios');

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const ProductType = require('./product_type');
const SKUMarketType = require('./sku_market_type');
const THDProductData = require('../../database');

const thdProduct = new THDProductData();

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSKU: {
      type: ProductType,
      args: {
        skuNumber: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return thdProduct.addProduct(args);
      }
    },
    addSKUToAMarket: {
      type: SKUMarketType,
      args: {
        skuNumber: { type: GraphQLString },
        marketNumber: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        return thdProduct.addSkuToAMarket(args);
      }
    }
  }
});

module.exports = mutation;
