import React, { Component } from 'react';
import './opd.css'
import Role from "../Role/role";
import calendar from '../../assets/images/calendar.png'

class Opd extends Component{
    render() {
        return(
            <React.Fragment>
                <div className='date-viewer'>
                    <i className="far fa-calendar fa-lg"/>
                    <span className='date'>01/01/2000 - 01/01/2000</span>
                </div>
                <div className='main1'>
                    <div className='sub_header'>
                        Roles
                    </div>
                    <div className='adder'>
                        <Role/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Opd;