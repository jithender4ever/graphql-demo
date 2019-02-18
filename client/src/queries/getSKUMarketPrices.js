import gql from 'graphql-tag';

export default gql`
query SKUMarketsQuery($skuNumbers: [String], $marketNumbers: [Int!]) {
    skuMarketPrices(skuNumbers: $skuNumbers, marketNumbers: $marketNumbers) {
        skuNumber,
        marketNumber,
        permanentPrice,
        temporaryPrice,
        tempPriceExpDate
    }
}
`;
