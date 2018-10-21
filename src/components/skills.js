import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress } from 'reactstrap';

import NavBar from './common/navBar';
import PageControls from "./common/pageControls";

const skills = () => {
    return (
        <div className="page-content">
            <PageControls goto="/work" spanN="my work" classN="next-page-arrow" />
            <PageControls goto="/about" spanN="about" classN="prev-page-arrow" />
            <NavBar />
            <div className="main-container">
                <Row>
                    <Col className="text-center">
                        <h2 className="main-heading">Core Skills</h2>
                        <h5 className="main-subheading">Some of my technology stack</h5>
                    </Col>
                </Row>
                    <div className="progress-bars-container">
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4>JavaScript</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4>ReactJS</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4>Redux</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="80">80%</Progress></Col>
                            <Col md='2'><h4>NodeJS</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="75">75%</Progress></Col>
                            <Col md='2'><h4>Angular 2</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="80">80%</Progress></Col>
                            <Col md='2'><h4>ImmutableJS</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4>Bootstrap4</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4>SCSS</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4>CSS3</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4>HTML5</h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="80">80%</Progress></Col>
                            <Col md='2'><h4>AngularJS</h4></Col>
                        </Row>
                    </div>
            </div> 
    </div>   
    )
}

export default skills;