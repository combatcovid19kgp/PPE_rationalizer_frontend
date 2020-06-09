import React, { Component } from 'react';
import './opd.css'
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";


class Opd extends Component{
    render() {
        return(
            <React.Fragment>
                <DateViewer/>
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