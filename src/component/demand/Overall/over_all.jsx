import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Inputbut from './Input_but';
import DateViewer from "../../helpers/Date.Viewer";
import './over_all.css';


class Overall extends Component{
    render() {
        return(
            <>
                <DateViewer/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="center">Item</th>
                            <th className="center">ICU</th>
                            <th className="center">OPD</th>
                            <th className="center">Quarantine</th>
                            <th className="center">Old Age Center</th>
                            <th className="center">Medical Store</th>
                            <th className="center">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <td>Gloves</td>
                        <td>56</td>
                        <td>40</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                     </tr>
                     <tr>
                        <td>Apron</td>
                        <td>56</td>
                        <td>40</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                     </tr>
                     <tr>
                        <td>Phenyl(in ml)</td>
                        <td>56</td>
                        <td>40</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                        <td>96</td>
                     </tr>
                 </tbody>
                </Table>
                <center>
                <Button variant="light"> <b>Download as CSV</b></Button>
                <br></br>
                <Button variant="light"><b>Download as pdf</b></Button>
                </center>
            </>
        );
    }
}

export default Overall;
