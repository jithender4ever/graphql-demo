const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
} = graphql;

const {products} = require('../../database');
const ProductType = require('./product_type');

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
               return getProduct(parentValue.skuNumber)[0];
           }
       }
   }
});

getProduct = (skuNumber) => {
    console.log('skuNumber:', skuNumber);
    console.log('products', products);
    console.log(_.filter(products, product => product.skuNumber === skuNumber));
    return _.filter(products, product => product.skuNumber === skuNumber);

};

module.exports = SKUMarketType;
