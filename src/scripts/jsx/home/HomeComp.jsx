import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import * as sevices from './_HomeService';
import * as validate from './_HomeValidate';
import ListProduct from './ListProduct';
import HomeCart from './HomeCart';


class HomeComp extends Component {

	render() {
		return (
			<div style={{padding:10}}>
				<HomeCart />
				<p>Data Name: {this.props.Data.name}</p>
				<ListProduct />
			</div>
		);
	}
}

export default HomeComp;
