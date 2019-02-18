import React from 'react';
import {graphql} from "react-apollo";
import getSKUMarketPrices from '../queries/getSKUMarketPrices';
import renderSkus from './utils';

class SkuComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'ui segment'}>
                <h3 className={'ui block header'}>Particular SKU with prices from all markets</h3>
                <div className="ui relaxed divided list">
                  {renderSkus(this.props.data)}
                </div>
            </div>
        );
    }
}

export default graphql(getSKUMarketPrices, {
    options: (props) => {
        return {
            variables: {
                skuNumbers: ["123456"],
                marketNumbers: [1, 2]
            }
        }
    }
})(SkuComponent);
