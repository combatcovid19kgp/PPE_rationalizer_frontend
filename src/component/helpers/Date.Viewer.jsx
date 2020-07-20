import React, { Component } from "react";
import "./date.css";
import RangePicker from 'react-range-picker';


class DateViewer extends Component {
	render() {
		return (
			<div className="date-viewer">
				<span className="date-main">
					<span className="date">
						<RangePicker/>
					</span>
				</span>
			</div>
		);
	}
}

export default DateViewer;
