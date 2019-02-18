const products =
   [
      {
        "skuNumber": "123456",
        "skuDescription": "I am a SKU",
        "onlineViews": 1000
      },
      {
        "skuNumber": "111",
        "skuDescription": "I am another SKU",
        "onlineViews": 1200
      }
  ];

const skuStoreDetails = [
  {
    "skuNumber": "123456",
    "storeNumber": 121,
    "permanentPrice": 100.00,
    "temporaryPrice": 98.99,
    "tempPriceExpDate": "2019-02-28",
    "landedCost": 50.00,
    "inventory": 100
  },
  {
    "skuNumber": "123456",
    "storeNumber": 100,
    "permanentPrice": 110.00,
    "temporaryPrice": null,
    "tempPriceExpDate": null,
    "landedCost": 60.00,
    "inventory": 110
  },
  {
    "skuNumber": "123456",
    "storeNumber": 200,
    "permanentPrice": 110.00,
    "temporaryPrice": null,
    "tempPriceExpDate": null,
    "landedCost": 60.00,
    "inventory": 110
  },
  {
    "skuNumber": "111",
    "storeNumber": 100,
    "permanentPrice": 120.00,
    "temporaryPrice": null,
    "tempPriceExpDate": null,
    "landedCost": 55.00,
    "inventory": 100
  }
];

const skuMarketDetails = [
  {
    "skuNumber": "123456",
    "marketNumber": 1,
    "permanentPrice": 110.00,
    "temporaryPrice": 98.99,
    "tempPriceExpDate": "2019-02-28",
    "landedCost": 60.00,
    "inventory": 210
  },
  {
    "skuNumber": "123456",
    "marketNumber": 2,
    "permanentPrice": 100.00,
    "temporaryPrice": null,
    "tempPriceExpDate": null,
    "landedCost": 60.00,
    "inventory": 210
  },
  {
    "skuNumber": "111",
    "marketNumber": 1,
    "permanentPrice": 110.89,
    "temporaryPrice": null,
    "tempPriceExpDate": null,
    "landedCost": 55.00,
    "inventory": 100
  }
];

module.exports = class THDProductData {

  getSKUPricesInMarkets(skuNumbers, marketNumbers) {
    return skuMarketDetails.map((skuMarket) => {
      if (skuNumbers.includes(skuMarket.skuNumber) && marketNumbers.includes(skuMarket.marketNumber)) {
        return skuMarket;
      }
    });
  }

  getProduct(skuNumber) {
    return products.filter(product => product.skuNumber === skuNumber);
  }

  addProduct(args) {
    const product = { ...args, skuDescription: "TEST", onlineViews: 100};
    products.push(product);

    return product;
  }

  addSkuToAMarket(args) {
    const skuMarket = {
          ...args,
          permanentPrice: 110.00,
          temporaryPrice: 98.99,
          tempPriceExpDate: "2019-02-28",
          landedCost: 60.00,
          inventory: 210
        };

    skuMarketDetails.push(skuMarket);

    return skuMarket;
  }

};
