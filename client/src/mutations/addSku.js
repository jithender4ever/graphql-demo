import React from 'react';
import gql from "graphql-tag";

const addSku = gql`
mutation addSKU($skuNumber: String){
    addSKU(skuNumber: $skuNumber) {
        skuNumber,
        skuDescription,
        onlineViews
    }
}
    `;

export default addSku;
