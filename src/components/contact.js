import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import NavIconComp from './common/navIcon';

import Input from './UI/input';

const contact = () => {
    return (
        <div>
        <div className='contact-page'>  
            <div className=""><NavIconComp /></div>
            <div className="contact">
                <div className="text-center">
                    <h2>Contact</h2>
                    <hr />
                </div>
                <div className="col-md-9 mt-5 be-center">
                <Row>
                    <Col md='4'>
                        <div className='contact-item1'>
                            <i class="fas fa-map-marker-alt fa-2x"></i>
                            <p>Jacksonville, Florida</p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className='contact-item1'>
                            <i class="far fa-envelope fa-2x"></i>
                            <p>mahipalr369@gmail.com</p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className='contact-item1'>
                            <i class="fas fa-phone fa-2x"></i>
                            <p>+1 712 328 5679</p>
                        </div>
                    </Col>      
                </Row>
                </div>
                <div className="col-md-6 mt-5 be-center">
                    <h4 className='pb-2'>Have a question or want to work together? </h4>
                    <form name="sentMessage" id="contactForm" validate>
                        <Row>
                            <Col md='6' sm='12'>
                                <Input 
                                    inputtype='input'
                                    placeholder="Name"
                                />
                            </Col>
                            <Col md='6'sm='12'>
                                <Input 
                                    inputtype='input'
                                    placeholder="Email"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                               <Input
                                    inputtype='textarea'
                                    rows="4" 
                                    placeholder="Enter your message here..."
                                />
                            </Col>
                        </Row>
                        <Button type="submit" color="success" outline>Send Message</Button>
                    </form>
                    <div className="social pt-5 pb-2">
                      <ul className="pl-0">
                        <li><a href="https://www.linkedin.com/in/mahipalr369" target='blank'><i className="fab fa-2x fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-2x fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-2x fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-2x fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-2x fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-2x fa-instagram"></i></a></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="fnav text-center">
                  <p>Copyright &copy; 2015 MahipalReddy </p>
                </div>
            </div>
        </div>
        <div className="left-arrow"><a><Link to='/work'><i class="fas fa-angle-left fa-2x"></i></Link></a></div>
    </div>
    );
};

export default contact;