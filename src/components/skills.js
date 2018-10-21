import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress } from 'reactstrap';

import Navigation from './common/navigation';
import PageControls from "./common/pageControls";

const skills = () => {
    return (
        <div className="page-content">
            <PageControls goto="/work" spanN="my work" classN="next-page-arrow" />
            <PageControls goto="/about" spanN="about" classN="prev-page-arrow" />
            <Navigation />
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
                            <Col md='2'><h4 className="skill-item"><span>JavaScript</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>ReactJS</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>Redux</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="80">80%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>NodeJS</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="75">75%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>Angular2</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="80">80%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>ImmuatbelJS</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>Bootstrap</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>SCSS</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="85">85%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>CSS3</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="success" value="90">90%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>HTML5</span></h4></Col>
                        </Row>
                        <Row>
                            <Col md='2'></Col>
                            <Col md='4'><Progress animated color="info" value="80">80%</Progress></Col>
                            <Col md='2'><h4 className="skill-item"><span>AngularJS</span></h4></Col>
                        </Row>
                    </div>
            </div> 
    </div>   
    )
}

export default skills;