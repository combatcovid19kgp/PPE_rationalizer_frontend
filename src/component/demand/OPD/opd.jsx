import React, { Component } from "react";
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";
import Table3 from "../Table/table";
import Save from "../Save/save";

class Opd extends Component {
	render() {
		return (
			<React.Fragment>
				<DateViewer />
				<div className="sub_header">Roles</div>
				<Role />
				<Table3 />
				<div className="clearfix" />
				<Save />
			</React.Fragment>
		);
	}
}

export default Opd;
