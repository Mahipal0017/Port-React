import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";
import UIInputputFiled from '../components/UI/UIInputField';

import { getRequiredField } from './modules/ConstraintsHelper';
import * as Utility from './modules/Utility';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            test:'',
        }
    }

    getErrorMessage = (field, errors) => {
        if (errors) {
          let messages = [];
          if (Array.isArray(field)) {
            field.map(function(v, index) {
              if (errors.hasOwnProperty(v)) {
                messages.push(errors[v].join());
              }
            });
          } else {
            if (errors.hasOwnProperty(field)) {
              messages.push(errors[field].join());
            }
          }
          return messages.join();
        }
    }

    runValidations= ste => {
        let constraints = {};
        let validatedReturn = null;
    
        try {
            constraints["test"] = getRequiredField();
            validatedReturn = Utility.confirmConstraints(ste, constraints);
        } catch(e) {
          console.log(e);
        } finally {
          return validatedReturn; 
        }
      }

    update = (key, value) => {
        let v = {};
        v[key] = value;
        this.setState(Object.assign(this.state, v));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = this.runValidations(this.state);
   
        if (validationErrors) {
          this.setState({error: validationErrors});
        } else {
          delete this.state.error;
          console.log("Passed Validation", this.state)
        }
    }

    render(){
        return (
            <div className="page-content">
                <PageControls goto="/work" spanN="my work" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col className="text-center">
                            <h2 className="main-heading">Say Hello</h2>
                            <h5 className="main-subheading">Have a question or want to work together?</h5>
                        </Col>
                    </Row>
                    <Row className="col-md-9 mt-5 be-center">
                        <Col md='4'>
                            <div className='contact-item1'>
                                <i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Jacksonville, Florida</p>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='contact-item1'>
                                <i className="far fa-envelope fa-2x"></i>
                                <p>mahipalr369@gmail.com</p>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='contact-item1'>
                                <i className="fas fa-phone fa-2x"></i>
                                <p>+1 712 328 5679</p>
                            </div>
                        </Col>      
                    </Row>
                    <div className="col-md-6 mt-5 be-center">
                        <h4 className='pb-2'>Have a question or want to work together? </h4>
                            <UIInputputFiled 
                                label="TEST"
                                name="test"
                                placeholder="test"
                                defaultValue={this.state['test']}
                                onValidatedChange= {this.update}
                                onChangeOverride={true} 
                                layout="FLAT"
                                errorMessage={this.getErrorMessage("test", this.state.error)}
                                />
                            <button type="submit" className="submit-btn" onClick={this.handleSubmit}>Send Message</button>
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
                <div id="">
                    <div className="text-center">
                      <p>Copyright &copy; 2015 MahipalReddy </p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Contact;