import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class ModalComp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showModal: false,
			divComp: null,
			titleComp: null
		}
	}

	openModal() {
		this.setState({ showModal: true });
	}

	closeModal() {
		this.setState({ showModal: false });
	}

	setContent(_title, _Comp){
		if(_title != null){			
			this.setState({ titleComp: _title });
		}
		if(_Comp != null){
			this.setState({ divComp: _Comp });
		}
	}

	render() {
		if(this.state.showModal){
			return (
				<Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
					<Modal.Header closeButton>
						{this.state.titleComp}
					</Modal.Header>
					<Modal.Body>
						{this.state.divComp}
					</Modal.Body>
				</Modal>
			);
		}
		return null;
	}
}

export default ModalComp;
