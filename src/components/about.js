import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import NavIconComp from './common/navIcon';
import profileImage from '../extras/img/profile.jpeg';
import bitmojiImage from '../extras/img/bitmoji.jpg';
import Resume from '../extras/Mahipal-Resume.docx';

class About extends Component {
    state = {
        Image: bitmojiImage,
    }
    mouseEntered = () => {
        this.setState({Image:profileImage});
    }
    mouseLeft = () => {
        this.setState({Image:bitmojiImage});
    }
    render(){
        return (
            <div>
                <div className="app-header"><NavIconComp /></div>
                <div className="text-center">
                    <h2>About Me</h2>
                    <hr />
                </div>
                <Row className="pt-5">
                    <Col md='4' className="parent-col">
                        <img 
                            src={this.state.Image}
                            alt="Smiley face"
                            className="profileImage"
                            height='300'
                            width='240'
                            onMouseEnter={this.mouseEntered}
                            onMouseLeave={this.mouseLeft}
                            />
                    </Col>
                    <Col md='8'>
                        <h4>Hi! I'm Mahi. I'm a software developer based in Florida.</h4>
                        <br />
                        <p>I'm comfortable throughout the stack, but my passion lies in the front end, at the intersection of code and design. I currently build software for the Florida Blue at the Jacksonville, Florida.</p>
                        ​<p>Outside of code, I like to create in other ways. From blogging to music-making, photography to guerilla sidewalk chalk street art, I'm always trying new ways of expressing myself. I also like to meditate, talk to strangers, and run lifestyle experiments.
                        Previously, I've taught code to women, served in the Peace Corps, and management consulted for Fortune 100 companies. I also hold a degree in management from the Valparaiso University.</p>
                        <br />
                        <p>Hi there! I am a Fullstack developer specialized in React and Node.js.

I've always had a passion for technology and product development - even before becoming a developer, having worn many hats in my career between business development, sales and product management for tech giants and startups in China, Brazil and the US. I use my experience to be more than just a coder, connecting business requirements with modern technology.

I have 4+ years of development experience building fullstack products from scratch, developing and integrating APIs, working with a variety of databases and clould platforms and more recently developing mobile applications with React Native.

Below you'll find a list of some of my skills:</p>
                        <a role="button" href={Resume} download=""><Button color='primary' outline>Download Resume</Button></a>
                    </Col>
                </Row>
                <div className="left-arrow"><a><Link to='/app'><i class="fas fa-angle-left fa-2x"></i></Link></a></div>
                <div className="right-arrow"><a><Link to='/skills'><i class="fas fa-angle-right fa-2x"></i></Link></a></div>
            </div>
        );
    }
};

export default About;