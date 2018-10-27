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
                    <Row className="animated fadeInDown">
                        <Col className="text-center">
                            <h2 className="main-heading">About Mahi</h2>
                            <h5 className="main-subheading">I'm a software developer based in Florida.</h5>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col lg="4" className="pb-5 animated fadeInLeft">
                            <Row className="about-img-container" >
                            <Col>
                                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	                                <div class="flipper">
	                            	    <div class="front"><img className="cartoonImage" src={bitmojiImage} alt="Mahipal Reddy" /></div>
	                            	    <div class="back"><img className="profileImage" src={profileImage} alt="Mahipal Reddy" /></div>
	                                </div>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 className="pt-3">Fast | Efficient | Responsive | Updated</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="8" className="pb-5">
                            <div className="about-text-container animated fadeInRight">
                                <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of application and user.
                                <br/><br/>I have 4+ years of development experience building products from scratch, developing and integrating with APIs, 
                                working with a variety of frameworks and technologies and more recently developing applications with ReactJS. 
                                I use my experience to be more than just a coder, connecting business requirements with modern technology.
                                I also hold a degree in project management from the Valparaiso University.</p>
                                <p>I am a good listner. I read the articles related to space, matter and universe.
                                I am much intrested in travelling, exploring new places and socializing with new people.</p>
                                <br/>
                            </div>
                            <div className="animated fadeInUp">
                            <a role="button" href={Resume} download="">
                                <button className="core-btn activatedButton download-btn"><i className="fas fa-download hvr-icon"></i> Download CV</button>
                            </a>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row><Col className="text-center"><h3>"It's the will, more than the skill"</h3></Col></Row> */}
                </div>
            </div>
        );
    }
};

export default About;