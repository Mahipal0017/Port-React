import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress } from 'reactstrap';
// import {Progress} from 'react-sweet-progress';
import NavIconComp from './common/navIcon';

const skills = () => {
    return (
        <div>
        <div className="app-header"><NavIconComp /></div>
        <div className="skills text-center"> <h2>Core Skills</h2></div>
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
        <div className="left-arrow"><a><Link to='/about'><i class="fas fa-angle-left fa-2x"></i></Link></a></div>
        <div className="right-arrow"><a><Link to='/work'><i class="fas fa-angle-right fa-2x"></i></Link></a></div>
    </div>    
    )
}

export default skills;