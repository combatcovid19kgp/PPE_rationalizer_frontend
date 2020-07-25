import React, { Component } from "react";
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";
import Table3 from "../Table/table";
import Save from "../Save/save";
import shortid from "shortid";

class Opd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roles : []
		}
	}
	handleRoleAdd = (roleValue, numValue) => {
			this.setState(previousState => ({
					roles: [
					...previousState.roles,
					{
						role: roleValue.value,
						quantity: numValue,
						id: shortid.generate(),
					},
				]
			}))
	}
	handleRoleDelete = (id) => {
		this.setState(previousState =>({
			roles: previousState.roles.filter(x => x.id !== id)
		}));
	}
	handleRoleChange = () => {

	}
	render() {
		return (
			<React.Fragment>
				<DateViewer />
				<div className="sub_header">Roles</div>
				<Role
					handleRoleAdd = {this.handleRoleAdd}
					handleRoleDelete = {this.handleRoleDelete}
					handleRoleChange = {this.handleRoleChange}
					roles={this.state.roles}
				/>
				<Table3 />
				<div className="clearfix" />
				<Save />
			</React.Fragment>
		);
	}
}

export default Opd;
