import React, {Component} from "react";
import DateViewer from "../../helpers/Date.Viewer";
import Table1 from "../Today Table/table1";

class Overall extends Component{
    render() {
        return(
            <React.Fragment>
                <DateViewer/>
                <Table1/>
            </React.Fragment>
        )
    }
}

export default Overall;