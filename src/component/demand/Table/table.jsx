import React,{Component} from "react";
import Table from 'react-bootstrap/Table';


class Table3 extends Component{
    render() {
        return(
            <div className='table-container1'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Doctors</th>
                            <th>Nurses</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gloves</td>
                            <td>48</td>
                            <td>48</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Apron</td>
                            <td>48</td>
                            <td>48</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Phenyl</td>
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

export default Table3;