import React from "react";

const renderSkus = ({loading, error, skuMarketPrices}) => {

    if(loading) { return <p>Loading...</p>}
    if(error) { return <p>Error: {error.message}</p>}

    return skuMarketPrices.map((skuMarket, index) => {
        return (
            <li className={'ui item'} key={index}>
                <p>SKU#: {skuMarket.skuNumber}</p>
                <p>Market#: {skuMarket.marketNumber}</p>
                <p>Perm Price: <i className="dollar sign icon"></i>{skuMarket.permanentPrice}</p>
                <p>Temp Price: {skuMarket.temporaryPrice ? <span><i className="dollar sign icon"></i>{skuMarket.temporaryPrice}</span> : '-'}</p>
                <p>Temp Exp Date: {skuMarket.tempPriceExpDate ? skuMarket.tempPriceExpDate : '-'}</p>
            </li>

        );
    });
};

export default renderSkus;
