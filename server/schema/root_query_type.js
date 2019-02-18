const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString } = graphql;

const THDProductData = require('../../database');
const thdProduct = new THDProductData();

const SKUMarketType = require('./sku_market_type');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        skuMarketPrices: {
            type: new GraphQLList(SKUMarketType),
            args: {
                skuNumbers: { type: new GraphQLList(GraphQLString) },
                marketNumbers: { type: new GraphQLList(GraphQLInt) }
            },
            resolve(parentValue, args) {
                const res =  thdProduct.getSKUPricesInMarkets(args.skuNumbers, args.marketNumbers);
                return res.filter(i => i)
            }
        }
    }
});

module.exports = RootQuery;
