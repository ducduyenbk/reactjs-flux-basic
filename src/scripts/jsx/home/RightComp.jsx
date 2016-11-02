import React, { Component } from 'react';

class RightComp extends Component {
	constructor(props) {
		super(props)
		this.state = {
            ShoppingCart: []
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
            this.setState({
                ShoppingCart: this.addToCart(productItem)
            });
        }
    }

    addToCart(productItem){
        var shoppingCart = [... this.state.ShoppingCart];
        //If exist
        if(shoppingCart != null && shoppingCart.length > 0){            
            for (var i = 0, len = shoppingCart.length; i < len; i++) {
              if(shoppingCart[i].ProductId == productItem.ProductId){
                shoppingCart[i].Qty++;
                return shoppingCart;
              }
            }
        }
        //If not exist
        productItem.Qty = 1;
        shoppingCart.push(productItem);
        return shoppingCart;
    }    

	renderListProduct(){
        var _this = this;
        var listProduct = (
                <p className="text-center">Your cart is empty</p>
            );
        if(_this.state.ShoppingCart.length > 0){
            listProduct = _this.state.ShoppingCart.map(function(item, index){
                return (
                    <p className="list-group-item" key={index}>
                        <a className="list-group-item">({item.Qty}) | {item.ProductName}</a>
                    </p>
                );
            });            
        }

        return listProduct;
    }

	render() {

		return (
			<div className="list-group">
	            <p className="list-group-item active">Shopping Cart Details</p>
	            {this.renderListProduct()}
	        </div>
		);
	}
}

export default RightComp;