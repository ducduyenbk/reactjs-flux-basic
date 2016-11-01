import React, { Component } from 'react';
import * as data from '../../js/product';
import ModalComp from '../common/ModalComp';
import ProductDetailComp from './_ProductDetailComp';

class ListProduct extends Component {

	onClick_CloseDetails(_this)
	{
		_this.ModalComp.closeModal();
	}

	onClick_ShowDetails(productItem)
    {
        var divTitle = "Product details";
        var divContent = (
            <ProductDetailComp Item={productItem} ModalComp={this} FuncClose={this.onClick_CloseDetails}/>
        );
        this.ModalComp.setContent(divTitle, divContent);
        this.ModalComp.openModal();
    }

	render() {
		let _this = this;
		return (
			<div>
				<div className="row">
					{
						data.products.map(function (item, index) {
							return(
								<div key={index} className="col-xs-6 col-lg-4">
					              	<h4>{item.ProductName}</h4>
					              	<img src={item.ImageUrl} width={60} height={80}/>
					              	<p>{item.Price}</p>
					              	<p>{item.ProductDesc}</p>
					              	<p><a className="btn btn-secondary" onClick={_this.onClick_ShowDetails.bind(_this, item)}>View details &raquo;</a></p>
					            </div>							
							);
						})
					}
				</div>
				<ModalComp ref={(c) => this.ModalComp = c}/>
			</div>
		);
	}
}

export default ListProduct;