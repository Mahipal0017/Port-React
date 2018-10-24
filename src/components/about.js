import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";

import profileImage from '../extras/img/profile.jpeg';
import bitmojiImage from '../extras/img/bitmoji.jpg';
import Resume from '../extras/Mahipal-Resume.docx';

class About extends Component {

    render(){
        return (
            <div className="page-content">
                <PageControls goto="/skills" spanN="skills" classN="next-page-arrow" />
                <PageControls goto="/whatido" spanN="what i do" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col className="text-center">
                            <h2 className="main-heading">About Mahi</h2>
                            <h5 className="main-subheading">I'm a software developer based in Florida.</h5>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Row lg='4' className="about-img-container">
                            <Col xs="12"><img className="cartoonImage" src={bitmojiImage} alt="Mahipal Reddy" /></Col>
                            <Col sx="12"><h4 className="pt-3">Fast | Efficient | Responsive | Updated</h4></Col>
                            {/* <img className="profileImage" src={profileImage} alt="Mahipal Reddy" /> */}
                        </Row>
                        <div className="about-text-container text-center pt-5">
                            <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of application and user.
                            <br/><br/>I have 4+ years of development experience building products from scratch, developing and integrating with APIs, 
                            working with a variety of frameworks and technologies and more recently developing applications with ReactJS. 
                            I use my experience to be more than just a coder, connecting business requirements with modern technology.
                            I also hold a degree in project management from the Valparaiso University.</p>
                            <br/>
                            <a role="button" className="pb-5" href={Resume} download=""><button className="core-btn activatedButton" >Download Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;