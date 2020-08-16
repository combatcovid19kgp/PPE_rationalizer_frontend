import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import '../Overall/input_button.css'

class Table3 extends Component {
	render() {
		let tableRow;
		if(this.props.Item) {
			tableRow = this.props.Item.map((x) => {
				return (
					<tr>
						<td className="text-center">{x.roleName}</td>
						<td>
							<table width="100%">
								{x.items.map((y) => {
									return(
										<tr className="text-center">
											<td style={{width: "25%"}}>{y.item_name}</td>
											<td style={{width: "35%"}}>{y.quantity*x.quantity}</td>
											<td style={{width: "40%"}}>
												<input
													type="Number"
													name="numValue"
													className="input_b"
												/>
											</td>
										</tr>
									)
								})}
							</table>
						</td>
					</tr>
				)
			})
		}

		return (
			<div className="table-container1">
				<Table striped hover bordered>
					<thead>
						<tr>
							<th colSpan="1">Role</th>
							<th className="text-center">Items</th>
						</tr>
					</thead>
					<tbody>
						{tableRow}
						{/*<tr>*/}
						{/*	<td>Gloves</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*</tr>*/}
						{/*<tr>*/}
						{/*	<td>Apron</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*</tr>*/}
						{/*<tr>*/}
						{/*	<td>Phenyl</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*	<td>48</td>*/}
						{/*	<td>*/}
						{/*		<input type="Number"*/}
						{/*			name="numValue"*/}
						{/*			className="input_b"*/}
						{/*		/>*/}
						{/*	</td>*/}
						{/*</tr>*/}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Table3;
