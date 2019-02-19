import React from 'react';
import getSKUMarketPrices from '../queries/getSKUMarketPrices';
import renderSkus from './utils';
import { Query } from 'react-apollo';

class SkuList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'ui segment'}>

                <h3 className={'ui block header'}>List of SKUs with prices from A market</h3>
                <div>
                <Query
                    query={getSKUMarketPrices}
                    variables={{
                        skus: ["123456", "111"],
                        markets: [1]
                    }}
                >
                    { ({loading, error, data}) => {

                        if (loading) { return <p>Loading...</p> }
                        if (error) { return <p>ERROR: {error.message}</p> }

                        return <div className={"ui relaxed divided list"}>{renderSkus(data)}</div>
                    }}
                </Query>
            </div>

            </div>
        );
    }
}

export default SkuList;
