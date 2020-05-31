import React, { Component } from 'react';
import './menu.css'
import { push as Menu } from 'react-burger-menu'
import close from '../assets/images/close icon.png'
import {NavLink} from "react-router-dom";

class MenuMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    render() {
        return(
            <Menu disableAutoFocus
                      pageWrapId={ "page-wrap" }
                      outerContainerId={ "outer-container"}
                      isOpen={this.state.menuOpen}
                      onStateChange={(state) => this.handleStateChange(state)}
                      width={ '55%' }
                      customCrossIcon={ <img src={close}  alt= 'Close'/> }
                >
                    <NavLink exact id="home" to="/" activeStyle={{ color: "red" }} onClick={() => this.closeMenu()}>
                        {/*<i className="fa fa-home" aria-hidden="true"/>*/}
                        <span style={{fontWeight:'bold'}}>HOME</span>
                    </NavLink>
                    <NavLink id="design" to="/demand" activeStyle={{ color: "red" }} onClick={() => this.closeMenu()}>
                    {/*<i className="fa fa-list-alt" aria-hidden="true"/>*/}
                    <span>DEMAND</span>
                    </NavLink>
                    <NavLink id="consumeLogs" to="/ConsumeLogs" activeStyle={{ color: "red" }} onClick={() => this.closeMenu()}>
                    {/*<i className="fa fa-file-text-o" aria-hidden="true"/>*/}
                    <span style={{textAlign:'left'}}>LOGS</span>
                    </NavLink>
            </Menu>
        )
    }
}

export default MenuMobile;