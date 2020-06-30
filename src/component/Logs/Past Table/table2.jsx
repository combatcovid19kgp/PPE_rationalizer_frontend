import React,{Component} from "react";
import Table from 'react-bootstrap/Table';
import './table2.css'

class Table2 extends Component{
    render() {
        return(
            <div className='table-container1'>
                <div className='table-heading'>Past Consumption</div>
                <Table striped hover bordered>
                    <thead>
                        <tr>
                            <th/>
                            <th>Gloves</th>
                            <th>Apron</th>
                            <th>Phenyl</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>30/03/2020</td>
                            <td>48</td>
                            <td>48</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>31/03/2020</td>
                            <td>48</td>
                            <td>48</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>29/03/2020</td>
                            <td>48</td>
                            <td>48</td>
                            <td>48</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Table2;