import React, { Component } from "react";
import "./role.css";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import delete_icon from "../../assets/images/icons8-delete.svg";
import edit_icon from "../../assets/images/icons8-edit.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
		console.log(event.target)
	}
	handleInput(event) {
		this.setState({ numValue: event.target.value });
		console.log(event.target)
	}
	render() {
		let cards = [];
		this.props.roles.forEach((item) => {
			cards.push(
				<CSSTransition
					timeout={300}
					classNames="item"
					key={item.id}
					data-key={item.id}
				>
					<div className="flex-item" style={{ textAlign: "left" }}>
						<div className="items">
							{item.role} | {item.quantity}
							<div className="icons edit">
								<img src={edit_icon} alt="edit" />
							</div>
							<div
								className="icons delete"
								onClick={() => { this.props.handleRoleDelete(item.id) }}
							>
								<img src={delete_icon} alt="delete" />
							</div>
						</div>
						<div className="flex-container1">
							<div className="containers">
								<div className="circle-containers">10</div>
								Apron
							</div>
							<div className="containers">
								<div className="circle-containers">1000</div>
								Phenyl
							</div>
						</div>
					</div>
				</CSSTransition>
			);
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
