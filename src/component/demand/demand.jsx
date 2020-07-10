import React, { Component } from 'react';
import './demand.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from "react-bootstrap/Tab";
import Opd from "./OPD/opd";
import Overall from "./Overall/over_all";

class Demand extends Component{
    render() {
        return(
            <div id='main-demand'>
                <div className='title_head'>
                    Demand
                </div>
                <div className='tabs'>
                    <div className='create'>Create New</div>
                    <Tabs defaultActiveKey="OA" id="uncontrolled-tab-example">
                        <Tab eventKey="OA" title="Overall">
                           <Overall/>
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
