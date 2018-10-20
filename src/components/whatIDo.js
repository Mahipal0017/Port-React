import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import NavBar from "./common/navBar";

class whatIDo extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="page-control">
                    <Link to="/contact" className="next-page-arrow">
                        <span>About</span>
                        <em></em>
                    </Link>
                </div>
                <NavBar />
                <div className="main-container">
                    <Row>
                        <Col className="text-center">
                            <h2 className="main-heading">What I do</h2>
                            <h5 className="main-subheading">Things I'm skilled at and passionate about.</h5>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col lg="6" className="do-item">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x core-1"></i>
                                <i className="fas fa-code fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="do-item-heading">
                            Web Appliaction 
                            <br className="hidden-xs hidden-sm hidden-md" />
                            Development
                            </h4>
                            <p className="text-muted">Fast, responsive and engaging apps that bring your ideas to life.</p>
                        </Col>
                        <Col lg="6" className="do-item">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x core-1"></i>
                                <i className="fas fa-broadcast-tower fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="do-item-heading">
                            API Integration & 
                            <br className="hidden-xs hidden-sm hidden-md" />
                            Development
                            </h4>
                            <p className="text-muted">
                            REST and SOAP API integration.
                            <br/>
                            REST API development with Node.js and Loopback.
                            </p>
                        </Col>
                        <Col lg="6" className="do-item">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x core-1"></i>
                                <i className="fas fa-dollar-sign fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="do-item-heading">
                            Payment Gateway 
                            <br className="hidden-xs hidden-sm hidden-md" />
                            Integration
                            </h4>
                            <p className="text-muted">Integration with the most popular Payment Gateways such as Stripe.</p>
                        </Col>
                        <Col lg="6" className="do-item">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x core-1"></i>
                                <i className="fab fa-accessible-icon fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="do-item-heading">
                            Web Accessible 
                            <br className="hidden-xs hidden-sm hidden-md" />
                            Development
                            </h4>
                            <p className="text-muted">Developing web applications for Web Accessibility 
                            based on WCGA, W3C guidelines.</p>
                        </Col>   
                    </Row>
                </div>
            </div>
        );
    }
}

export default whatIDo;