import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Progress } from 'reactstrap';

import Navigation from './common/navigation';
import PageControls from "./common/pageControls";

import SkillItem from './skillItem';

const skillsList = [{s:"JavaScript",v:"80"},
{s:"ReactJS",v:"80"},
{s:"Redux",v:"90"},
{s:"NodeJS",v:"75"},
{s:"Angular2",v:"75"},
{s:"ImmuatbelJS",v:"70"},
{s:"Bootstrap",v:"90"},
{s:"SCSS",v:"85"},
{s:"CSS3",v:"80"},
{s:"HTML5",v:"90"},
{s:"AngularJS",v:"80"}]

const skills = () => {
    return (
        <div className="page-content">
            <PageControls goto="/work" spanN="my work" classN="next-page-arrow" />
            <PageControls goto="/about" spanN="about" classN="prev-page-arrow" />
            <Navigation />
            <div className="main-container">
                <Row>
                    <Col className="text-center animated fadeInLeft">
                        <h2 className="main-heading">Core Skills</h2>
                        <h5 className="main-subheading">Some of my technology stack</h5>
                    </Col>
                </Row>
                <div className="progress-bars-container animated fadeInRight">
                    {skillsList.map(item => <SkillItem skillName={item.s} skillValue={item.v}/>)}
                </div>
                <Row>
                    <Col><h1><i class="fab fa-gitlab"></i></h1><p>GitLab</p></Col>
                </Row>
            </div> 
    </div>   
    )
}

export default skills;