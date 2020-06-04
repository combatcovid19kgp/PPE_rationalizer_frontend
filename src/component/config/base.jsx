import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import Menubar from "../menu/menu";
import Demand from "../demand/demand";
import Home from "../home/home";
import {Container, Row, Col } from "react-bootstrap";
import MenuMobile from "../menu/menu_mobile";



class Base extends Component{
    render() {
        let width = window.innerWidth;
        if (width>=768) {
            return (
                <Container fluid>
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Menubar/>
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <Switch>
                                <Route path='/demand'>
                                    <Demand/>
                                </Route>
                                <Route exact path='/'>
                                    <Home/>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            )
        }
        else if (width< 768){
            return (
                <div id="outer-container">
                <MenuMobile/>
                <main id="page-wrap">
                    <Switch>
                        <Route path='/demand'>
                            <Demand/>
                        </Route>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                    </Switch>
                </main>
            </div>
            )
        }
    }
}

export default Base;