import React, { Component } from 'react';

class CartComp extends Component {

	constructor(props) {
		super(props)
		this.state = {
            QtyProduct: 0
        };
	}

	componentDidMount() {
        window.Action_AddToCat.registerView(this);
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        window.Action_AddToCat.unRegisterView(this);
    }

    actionChanged(action) {
        if (action.getType() === __ActionType.Home.AddToCart) {
            
            var productItem = action.getParam();
            if(productItem != null && productItem.ProductId > 0){
                this.setState({
                    QtyProduct: this.state.QtyProduct + 1
                });
            }            
        }
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