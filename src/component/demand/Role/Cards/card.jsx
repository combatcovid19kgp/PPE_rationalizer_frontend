import React, { Component } from "react";
import edit_icon from "../../../assets/images/icons8-edit.svg";
import delete_icon from "../../../assets/images/icons8-delete.svg";
import { CSSTransition } from "react-transition-group";

class Card extends Component{
	render() {
		let roleItem = this.props.item.items.map((x,index)=>{
				return(
					<div className="containers" key={index}>
						<div className="circle-containers">{x.quantity}</div>
						{x.item_name}
					</div>
				)
			})
		return(
			<CSSTransition
					timeout={300}
					classNames="item"
					key={this.props.item.id}
					data-key={this.props.item.id}
				>
					<div className="flex-item" style={{ textAlign: "left" }}>
						<div className="items">
							{this.props.item.role} | {this.props.item.quantity}
							<div
								className="icons edit"
								onClick={() => {this.props.showModal(this.props.item.id)}}
							>
								<img src={edit_icon} alt="edit" />
							</div>
							<div
								className="icons delete"
								onClick={() => { this.props.handleRoleDelete(this.props.item.id) }}
							>
								<img src={delete_icon} alt="delete" />
							</div>
						</div>
						<div className="flex-container1">
							{roleItem}
						</div>
					</div>
				</CSSTransition>
		)
	}
}

export default Card;