import React, { Component } from 'react';

class ProductDetailComp extends Component {

	constructor(props) {
		super(props)
	}

	closeModel(){
		this.props.FuncClose(this.props.ModalComp);
	}

	addToCart(productItem){
		var action = new mFlux.MAction(__ActionType.Home.AddToCart);
        action.setParam(productItem);
        window.DispatcherPage.dispatchAction(action);

        //Close Modal
        this.closeModel();
	}

	render() {
		let item = this.props.Item;
		return (
			<div style={{padding: 10}}>
          		<h4>{item.ProductName}</h4>
              	<img src={item.ImageUrl} width={60} height={80}/>
              	<p>{item.Price}</p>
              	<p>{item.ProductDesc}</p>
              	<hr/>
              	<p>
              		<a className="btn btn-secondary" onClick={this.closeModel.bind(this)}>Close</a>
              		&nbsp;&nbsp;
              		<a className="btn btn-primary" onClick={this.addToCart.bind(this, item)}>Add To Cart</a>
              	</p>
          	</div>
		);
	}
}

export default ProductDetailComp;