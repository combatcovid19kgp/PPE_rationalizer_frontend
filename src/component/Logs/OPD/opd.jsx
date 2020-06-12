import React, {Component} from "react";
import DateViewer from "../../helpers/Date.Viewer";
import Table1 from "../Today Table/table1";
import Table2 from "../Past Table/table2";

class Opd extends Component{
    render() {
        return(
            <React.Fragment>
                <DateViewer/>
                <Table1/>
                <Table2/>
            </React.Fragment>
        )
    }
}

export default Opd;