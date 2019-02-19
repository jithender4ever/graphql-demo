import React from 'react';
import { Mutation } from 'react-apollo';
import addSku from '../mutations/addSku';

class SKUCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = { skuNumber: '' };
    }

    render() {
        return (
            <div >
                <div className="ui inverted segment">
                    <div className="ui inverted input">
                        <input
                            value={this.state.skuNumber}
                            onChange={e => this.setState({skuNumber: e.target.value})}
                            placeholder='Enter a SKU# to add'
                        />
                    </div>
                </div>

                <Mutation
                    mutation={addSku}
                    variables={ {skuNumber: this.state.skuNumber} }
                    onCompleted={ (data) => console.log('SKU is added', data)}
                >
                    {
                        (addSku) => <button className={'fluid ui primary button'} onClick={addSku}>Add SKU</button>
                    }
                </Mutation>
            </div>
        );
    }
}

export default SKUCreate;
