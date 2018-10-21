import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import NavBar from "./common/navBar";
import PageControls from "./common/pageControls";

import profileImage from '../extras/img/profile.jpeg';
import bitmojiImage from '../extras/img/bitmoji.jpg';
import Resume from '../extras/Mahipal-Resume.docx';

class About extends Component {

    render(){
        return (
            <div className="page-content">
                <PageControls goto="/skills" spanN="about" classN="next-page-arrow" />
                <PageControls goto="/whatido" spanN="what i do" classN="prev-page-arrow" />
                <NavBar />
                <div className="main-container">
                    <Row>
                        <Col className="text-center">
                            <h2 className="main-heading">About Me</h2>
                            <h5 className="main-subheading">Hi! I'm Mahi. I'm a software developer based in Florida.</h5>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col lg='4' className="about-img-container">
                            <img className="cartoonImage" src={bitmojiImage} alt="Mahipal Reddy" />
                            <img className="profileImage" src={profileImage} alt="Mahipal Reddy" />
                        </Col>
                        <Col lg='8' className="about-text-container">
                            <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of the web application and the user. I currently build software for the Florida Blue at the Jacksonville, Florida.</p>
                            ​Outside of code, I like to create in other ways. From blogging to music-making, photography to guerilla sidewalk chalk street art, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
                            Previously, I've taught code to women, served in the Peace Corps, and management consulted for Fortune 100 companies. I also hold a degree in management from the Valparaiso University.
                            <p>Hi there! I am a Fullstack developer specialized in React and Node.js.
                            I've always had a passion for technology and product development - even before becoming a developer, having worn many hats in my career between business development, sales and product management for tech giants and startups in China, Brazil and the US. I use my experience to be more than just a coder, connecting business requirements with modern technology.
                            I have 4+ years of development experience building fullstack products from scratch, developing and integrating APIs, working with a variety of databases and clould platforms and more recently developing mobile applications with React Native.
                            </p>
                            <a role="button" href={Resume} download=""><Button color='primary' outline>Download Resume</Button></a>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

export default About;