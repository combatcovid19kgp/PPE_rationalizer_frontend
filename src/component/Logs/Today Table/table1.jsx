import React,{Component} from "react";
import Table from 'react-bootstrap/Table';
import './table1.css'

class Table1 extends Component{
    render() {
        return(
            <div className='table-container'>
                <div className='table-heading'>Today's Consumption</div>
                <Table striped hover bordered>
                    <thead>
                        <tr>
                            <th/>
                            <th>Consumptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Gloves</td>
                          <td>48</td>
                        </tr>
                        <tr>
                          <td>Aprons</td>
                          <td>48</td>
                        </tr>
                        <tr>
                          <td>Phenyl</td>
                          <td>48</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Table1;