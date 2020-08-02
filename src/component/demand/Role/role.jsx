import React, { Component } from "react";
import "./role.css";
import Button from "react-bootstrap/Button";
import Select from "react-select";

import { TransitionGroup } from "react-transition-group";
import Card from "./Cards/card";

const options = [
	{ value: "Doctors", label: "Doctors" },
	{ value: "Nurses", label: "Nurses" },
	{ value: "Helpers", label: "Helpers" },
	{ value: "Patients", label: "Patients" },
];

class Role extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roleValue: "",
			numValue: "",
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	handleClick() {
		const {roleValue, numValue} = this.state;
		this.props.handleRoleAdd(roleValue, numValue);
		this.setState(({
			roleValue: "",
			numValue: "",
		}));
	}
	handleSelect(selectedOption, event) {
		this.setState({ roleValue: selectedOption })
	}
	handleInput(event) {
		this.setState({ numValue: event.target.value });
	}
	render() {
		let cards = [];
		this.props.roles.forEach((item) => {
			cards.push(
				<Card
					item = {item}
					showModal ={this.props.showModal}
					handleRoleDelete = {this.props.handleRoleDelete}
				/>
			)
		});
		let disabled = this.state.numValue === "" || this.state.roleValue === "";
		return (
			<div className="main1">
				<div className="adder">
					<div className="flex-container">
						<TransitionGroup>{cards}</TransitionGroup>
						<div className="flex-item">
							<div className="select-box">
								<Select
									options={options}
									onChange={this.handleSelect}
									name="roleValue"
									value={this.state.roleValue}
									menuPlacement="auto"
								/>
							</div>
							<div className="select-box1">
								<input
									type="Number"
									name="numValue"
									className="input"
									onChange={this.handleInput}
									value={this.state.numValue}
								/>
							</div>
							<Button
								variant="light"
								onClick={this.handleClick}
								disabled={disabled}
							>
								Add Role
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Role;
