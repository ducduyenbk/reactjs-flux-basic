import React, { Component } from 'react';

class ProductDetailComp extends Component {

	constructor(props) {
		super(props)
	}

	closeModel(){
		this.props.FuncClose(this.props.ModalComp);
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
              	<p><a className="btn btn-secondary" onClick={this.closeModel.bind(this)}>Close</a></p>
          	</div>
		);
	}
}

export default ProductDetailComp;