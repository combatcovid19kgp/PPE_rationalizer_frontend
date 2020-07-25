import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import '../Overall/input_button.css'

class Table3 extends Component {
	render() {
		return (
			<div className="table-container1">
				<Table striped hover bordered>
					<thead>
						<tr>
							<th>Item</th>
							<th colSpan="2" className="text-center">
								Doctors
							</th>
							<th colSpan="2" className="text-center">
								Nurses
							</th>
							<th colSpan="2" className="text-center">
								Total
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Gloves</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
						</tr>
						<tr>
							<td>Apron</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
						</tr>
						<tr>
							<td>Phenyl</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
							<td>48</td>
							<td>
								<input type="Number"
									name="numValue"
									className="input_b"
								/>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Table3;
