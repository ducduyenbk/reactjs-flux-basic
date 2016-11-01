import React, { Component } from 'react';

class HomeCart extends Component {
	render() {
		return (
			<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
		      	<div className="container">
		        	<a className="navbar-brand" href="#">Project name</a>
			        <ul className="nav navbar-nav">
			          	<li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
			          	<li className="nav-item"><a className="nav-link" href="#about">About</a></li>
			          	<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
			        </ul>
		      	</div>
		    </nav>
		);
	}
}

export default HomeCart;
