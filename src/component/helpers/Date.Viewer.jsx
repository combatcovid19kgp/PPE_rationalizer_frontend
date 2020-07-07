import React, { Component } from "react";
import "./date.css";

class DateViewer extends Component {
	render() {
		return (
			<div className="date-viewer">
				<span className="date-main">
					<i className="far fa-calendar fa-lg" />
					<span className="date">01/01/2000 - 01/01/2000</span>
				</span>
			</div>
		);
	}
}

export default DateViewer;
