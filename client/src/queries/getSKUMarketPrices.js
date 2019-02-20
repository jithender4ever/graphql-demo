import gql from 'graphql-tag';

export default gql`
query ($skus: [String], $markets: [Int!]) {
    skuMarketPrices(skus: $skus, markets: $markets) {
        skuNumber,
        marketNumber,
        permanentPrice,
        tempPriceExpDate
    }
}
`;
