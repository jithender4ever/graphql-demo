import React from 'react';
import {compose, graphql} from 'react-apollo';
import getSKUMarketPrices from '../queries/getSKUMarketPrices';
import SkuComponent from "./SkuComponent";
import SkuListComponent from "./SkuListComponent";
import renderSkus from './utils';
import addSku from "../mutations/addSku";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddSku = this.handleAddSku.bind(this);
    }

    handleAddSku() {
        console.log(this.props);
        this.props.mutate({
            variables: {
                skuNumber: "001"
            }
        }).then(({data}) => console.log('got data', data));
    }

    render() {
        return (
              <div>
                  <div className={'ui center horizontal compact raised segments'}>

                      <div className={'ui segment'}>
                          <h3 className={'ui block header'}>List of SKUs with prices from ALL markets</h3>
                          <div className="ui relaxed divided list">
                            {renderSkus(this.props.data)}
                          </div>
                      </div>
                      <SkuComponent />
                      <SkuListComponent />
                  </div>
                  <div className={'ui centered grid'}>
                      <div className={'four wide column'}>
                    <button className={'fluid ui primary button'} onClick={() => this.handleAddSku()}>Add a SKU</button>
                      </div>
                  </div>
              </div>
          )  ;
    }
}

export default compose(
    graphql(getSKUMarketPrices, {
    options: (props) => {
        return {
            variables: {
                skuNumbers: ["123456", "111"],
                marketNumbers: [1, 2]
            }
        }
    }
    }),
    graphql(addSku)
)(App);

// export default graphql(getSKUMarketPrices)(App);
