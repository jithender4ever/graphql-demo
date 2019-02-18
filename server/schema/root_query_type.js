const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString } = graphql;

const { skuMarketDetails, skuStoreDetails } = require('../../database');

const SKUMarketType = require('./sku_market_type');
const SKUStoreType = require('./sku_store_type');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        skuMarketPrice: {
            type: SKUMarketType,
            args: {
                skuNumber: { type: new GraphQLNonNull(GraphQLString) },
                marketNumber: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parentValue, {skuNumber, marketNumber}) {
                return _.find(skuMarketDetails, skuMkt => skuMkt.skuNumber === skuNumber && skuMkt.marketNumber === marketNumber);
            }
        },
        skuMarketPrices: {
            type: new GraphQLList(SKUMarketType),
            args: {
                skuNumbers: { type: new GraphQLList(GraphQLString) },
                marketNumbers: { type: new GraphQLList(GraphQLInt) }
            },
            resolve(parentValue, args) {
                const res =  getPricesForSkusInAMarket(args);
                return res.filter(i => i)
            }
        },
        skuStorePrice: {
            type: SKUStoreType,
            args: {
                skuNumber: { type: GraphQLString },
                storeNumber: { type: GraphQLInt }
            },
            resolve(parentValue, { skuNumber, storeNumber }) {
                return _.find(skuStoreDetails, skuStore => skuStore.storeNumber === storeNumber && skuStore.skuNumber === skuNumber);
            }
        },
        skuMarketInfo: {
            type: new GraphQLList(SKUMarketType),
            args: {},
            resolve(parentValue, args) {
                return skuMarketDetails;
            }
        }
    }
});

const getPricesForSkusInAMarket = ({skuNumbers, marketNumbers}) => {
    return skuMarketDetails.map(skuMkt => {
       if (skuNumbers.includes(skuMkt.skuNumber) && marketNumbers.includes(skuMkt.marketNumber)) {
           return skuMkt;
       }
    });
};

module.exports = RootQuery;
