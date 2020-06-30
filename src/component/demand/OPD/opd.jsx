import React, { Component } from 'react';
import Role from "../Role/role";
import DateViewer from "../../helpers/Date.Viewer";
import Table3 from "../Table/table";


class Opd extends Component{
    render() {
        return(
            <React.Fragment>
                <DateViewer/>
                <Role/>
                <Table3/>
            </React.Fragment>
        )
    }
}

export default Opd;