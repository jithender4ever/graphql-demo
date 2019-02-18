const Axios = require('axios');

const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const {products} = require('../../database');

const ProductType = require('./product_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSKU: {
      type: ProductType,
      args: {
        skuNumber: { type: GraphQLString }
      },
      resolve(parentValue, { skuNumber }) {
        return Axios.post(`http://localhost/3000/products`, {"skuNumber": "009"})
            .then(res => console.log(res));
      }
    }
  }
});

module.exports = mutation;
