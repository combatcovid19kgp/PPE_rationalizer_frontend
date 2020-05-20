import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Menubar from "../menu/menu";
import Demand from "../demand/demand";

class Base extends Component{
    render() {
        return(
            <div id="outer-container">
                <Menubar/>
                <main id="page-wrap">
                    <Switch>
                        <Route path='/demand'>
                            <Demand/>
                        </Route>
                        <Route exact path='/'>
                            <div style={{textAlign:'center'}}>HOME</div>
                        </Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Base;