import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import './demand.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from "react-bootstrap/Tab";
import Opd from "./OPD/opd";


class Demand extends Component{
    render() {
        return(
            <div id='main-demand'>
                <div className='title_header'>
                    Demand
                </div>
                <div className='tabs'>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                        <Tab eventKey="OA" title="Overall">

                        </Tab>
                        <Tab eventKey="OPD" title="OPD">
                            <Opd/>
                        </Tab>
                        <Tab eventKey="QT" title="Quarantine">

                        </Tab>
                        <Tab eventKey="OAC" title="Old Age Center">

                        </Tab>
                        <Tab eventKey="MS" title="Medical Store">

                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Demand;