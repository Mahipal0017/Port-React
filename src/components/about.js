import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";

import profileImage from '../extras/img/profile.jpeg';
import bitmojiImage from '../extras/img/bitmoji.jpg';
import Resume from '../extras/Mahipal-Resume.docx';

class About extends Component {

    componentDidMount(){
        document.title = "Mahipal Reddy/About"
    }

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
                                <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	                                <div className="flipper">
	                            	    <div className="front"><img className="cartoonImage" src={bitmojiImage} alt="Mahipal Reddy" /></div>
	                            	    <div className="back"><img className="profileImage" src={profileImage} alt="Mahipal Reddy" /></div>
	                                </div>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h6 className="mt-3">Fast | Efficient | Responsive | Updated</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="8" className="pb-5">
                            <div className="about-text-container animated fadeInRight">
                                <p> 
                                    A passionate software engineer that loves to solve interesting challenges across the full-stack. 
                                    I'm currently working as a Sr. IT Developer in Web and Mobile team at Florida Blue building the tools to delight customers with disabilities to manage their health data. 
                                    I’m keen to work towards building scalable systems that allow visualizing complex real-world data for better decision making. 
                                    I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of application and user. 
                                </p>
                                <p>
                                    Over 6 years of professional experience in designing, developing and maintaining the single page web applications. 
                                    I worked with a variety of javascript frameworks and ReactJS is my most recent javascript framework. 
                                    I developed the payment gateway by integrating with stripe vendor for Florida Blue client where customers can manage payments and set recurring payments. 
                                    I use my experience to be more than just a coder, connecting business requirements with modern technology.
                                    I also hold a degree in Information Technology from the Valparaiso University.
                                </p>
                                <p>
                                    I am a good listner. I love to read the articles related to space, matter and universe.
                                    I am much intrested in travelling, exploring new places and socializing with new people.
                                </p>
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