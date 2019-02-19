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
const ProductType = require('./product_type');

const Query = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        skuMarketPrices: {
            type: new GraphQLList(SKUMarketType),
            args: {
                skus: { type: new GraphQLList(GraphQLString) },
                markets: { type: new GraphQLList(GraphQLInt) }
            },
            resolve(parentValue, args) {
                const res =  thdProduct.getSKUPricesInMarkets(args.skus, args.markets);
                return res.filter(i => i)
            }
        },
        skus: {
            type: new GraphQLList(ProductType),
            resolve(parentValue, args) {
                return thdProduct.getProducts();
            }
        }
    }
});

module.exports = Query;
