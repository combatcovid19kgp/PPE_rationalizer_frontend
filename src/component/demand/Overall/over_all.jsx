import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Inputbut from './Input_but';
import './over_all.css';


class Overall extends Component{
    render() {
        return(
            <>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th className="center">Item</th>
                <th colspan="2" className="center">ICU</th>
                <th colspan="2" className="center">OPD</th>
                <th colspan="2" className="center">Quarantine</th>
                <th colspan="2" className="center">Old Age Center</th>
                <th colspan="2" className="center">Medical Store</th>
                <th colspan="2" className="center">Total</th>
             </tr>
             </thead>
             <tbody>
             <tr>
                <td>Gloves</td>
                <td>56</td>

                <td>
                <label for="ICU"> </label>

                <Inputbut/>

                </td>

                <td>40</td>
             
                <td>
                <label for="OPD"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Quarantine"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Old Age Center"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Medical Store"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Total"> </label>

                <Inputbut/>
               
                </td>
             </tr>

             <tr>

                <td>Apron</td>
                <td>56</td>

                <td>
                <label for="ICU"> </label>

                <Inputbut/>
               
                </td>

                <td>40</td>

                <td>
                <label for="OPD"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Quarantine"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Old Age Center"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Medical Store"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>                  
                <label for="Total"> </label>

                <Inputbut/>
               
                </td>
             </tr>

             <tr>
                <td>Phenyl(in ml)</td>
                <td>56</td>
                
                <td>
                <label for="ICU"> </label>

                <Inputbut/>
               
                </td>

                <td>40</td>

                <td>
                <label for="OPD"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Quarantine"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>
                <label for="Old Age Center"> </label>

                <Inputbut/>  
               
                </td>

                <td>96</td>

                <td>

                <label for="Medical Store"> </label>

                <Inputbut/>
               
                </td>

                <td>96</td>

                <td>

                <label for="Total"> </label>

                <Inputbut/>
               
                </td>
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
