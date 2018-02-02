import React, { Component } from 'react';
import publisher from 'publisher';

class CartComp extends Component {

	constructor(props) {
		super(props)
		this.state = {
            QtyProduct: 0
        };
	}

	componentDidMount() {  
        let _this = this;
        publisher.subscribe('Action_AddToCat', function (productItem) {
            //Noi dung
            if(productItem != null && productItem.ProductId > 0){
                _this.setState({
                    QtyProduct: _this.state.QtyProduct + 1
                });
            }
        });
    }

	render() {
        let count = this.state.QtyProduct;
		return (
			<div className="jumbotron text-center">
				<h3>Shopping Cart</h3>
            	<h2>{count} (items)</h2>
          	</div>
		);
	}
}

export default CartComp;