import React, { Component } from "react";
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";
import Table3 from "../Table/table";
import Save from "../Save/save";
import shortid from "shortid";
import ModalEdit from "../Modal/modal";

class DemandViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			roles: [],
			showModal: false,
			activeItemRole: null
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
	handleRoleChange = (id, value) => {
		this.setState((previousState) => ({
			roles : previousState.roles.map((item) => {
				if(item.id === id){
					return ({
						role : item.role,
						quantity : value,
						id : item.id
					})
				}
				return item;
			})
		}))
		this.setState({
			showModal : false,
			activeItemRole: null
		})
	}
	showModal = (id) => {
		this.setState((previousState) =>({
			showModal : true,
			activeItemRole : previousState.roles.find(item => item.id === id)
		}))
	}
	render() {
		return (
			<React.Fragment>
				<DateViewer />
				<div className="sub_header">Roles</div>
				<Role
					handleRoleAdd = {this.handleRoleAdd}
					handleRoleDelete = {this.handleRoleDelete}
					showModal = {this.showModal}
					roles={this.state.roles}
				/>
				<Table3 />
				<div className="clearfix" />
				<Save />
				<ModalEdit
					show={this.state.showModal}
					activeRole = {this.state.activeItemRole}
					handleChange = {this.handleRoleChange}
					handleClose = {() => {this.setState({
						showModal : false,
						activeItemRole: null
					})}}
					aria-labelledby="contained-modal-title-vcenter"
      		centered
					size='sm'
				/>
			</React.Fragment>
		);
	}
}

export default DemandViewer;
