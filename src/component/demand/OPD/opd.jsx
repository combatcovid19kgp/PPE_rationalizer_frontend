import React, { Component } from 'react';
import './opd.css'
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";
import Table3 from "../Table/table";


class Opd extends Component{
    render() {
        return(
            <React.Fragment>
                <DateViewer/>
                <div className='main1'>
                    <div className='adder'>
                        <Role/>
                    </div>
                </div>
                <Table3/>
            </React.Fragment>
        )
    }
}

export default Opd;