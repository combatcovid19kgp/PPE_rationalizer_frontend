import React, { Component } from 'react';
import './opd.css'
import Role from "../Role/role";
class Opd extends Component{
    render() {
        return(
            <div className='main1'>
                <div className='sub_header'>
                    Roles
                </div>
                <div className='adder'>
                    <Role/>
                </div>
            </div>
        )
    }
}

export default Opd;