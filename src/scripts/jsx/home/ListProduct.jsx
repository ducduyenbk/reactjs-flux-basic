import React, { Component } from 'react';
import * as data from '../../js/product';

class ListProduct extends Component {
	render() {
		return (
			<div>
				<h4>List Products</h4>
				<ul>
				{
					data.products.map(function (item, index) {
						return(
							<li key={index}>
								<p><img src={item.ImageUrl} width={60} height={80}/></p>
								<p>{item.ProductName}</p>
								<p>{item.Price}</p>
							</li>
						);
					})
				}
				</ul>
			</div>
		);
	}
}

export default ListProduct;