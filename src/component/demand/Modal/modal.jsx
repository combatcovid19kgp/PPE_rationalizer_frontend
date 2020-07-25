import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ModalEdit extends Component{
	constructor(props) {
		super(props);
		this.state = {
			input : ''
		}
	}
	handleInput = (event) => {
		this.setState({input : event.target.value})
	}
	handleChange = (id) => {
		this.props.handleChange(id, this.state.input);
		this.setState({input : ''})
	}
	handleClose = () => {
		this.setState({input : ''});
		this.props.handleClose()
	}
	render() {
		return(
			<Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					{
						this.props.activeRole &&
							<div>
								<h6>{this.props.activeRole.role}</h6>
								<input
									type="Number"
									name="numValue"
									className="input"
									onChange={this.handleInput}
									defaultValue={this.props.activeRole.quantity}
								/>
							</div>
					}
				</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleChange(this.props.activeRole.id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
		)
	}
}

export default ModalEdit;