import gql from 'graphql-tag';

export default gql`
query SKUMarketsQuery($skus: [String], $markets: [Int!]) {
    skuMarketPrices(skus: $skus, markets: $markets) {
        skuNumber,
        marketNumber,
        permanentPrice,
        temporaryPrice,
        tempPriceExpDate
    }
}
`;
