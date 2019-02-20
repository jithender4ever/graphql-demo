import React from 'react';
import { graphql } from 'react-apollo';
import getSKUMarketPrices from '../queries/getSKUMarketPrices';
import SkuComponent from "./SkuComponent";
import SkuList from "./SkuList";
import renderSkus from './utils';
import SKUCreate from "./SKUCreate";

class App extends React.Component {

    constructor(props) {
        super(props);
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
                      <SkuList />

                  </div>
                  <div className={'ui centered grid'}>
                    <div className={'four wide column'}>
                        <SKUCreate />
                    </div>
                  </div>
              </div>
          )  ;
    }
}

export default graphql(getSKUMarketPrices, {
    options: () => {
        return {
            variables: {
                skus: ["123456", "111"],
                markets: [1, 2]
            }
        }
    }
})(App);
