import React, { Component } from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Overall from "./Overall/overall";
import Opd from "./OPD/opd";
import Quarantine from "./Quarantine/quarantine";
import OldAgeCenter from "./oldAgeCenter/oldAgeCenter";
import 'bootstrap/dist/css/bootstrap.min.css';
import './logs.css';

class Log extends Component{
    render() {
        return(
            <div id='main-demand'>
                <div className='title_Head'>
                    Consumption Logs
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
                            <Quarantine/>
                        </Tab>
                        <Tab eventKey="OAC" title="Old Age Center">
                            <OldAgeCenter/>
                        </Tab>
                        <Tab eventKey="MS" title="Medical Store">

                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Log;