import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';
import { PulseLoader } from 'react-spinners';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";
import UIInputputFiled from '../components/UI/UIInputField';
import TextField from '@material-ui/core/TextField';

import { getRequiredField, getPhoneNumberField, getRequiredEmailAddress } from './modules/ConstraintsHelper';
import * as Utility from './modules/Utility';

import * as SendMessageActions from '../actions/contact';

// const styles = theme => ({
//     cssLabel: {
//       '&$cssFocused': {
//         color: 'blue[500]',
//       },
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//     cssUnderline: {
//       '&:after': {
//         borderBottomColor: 'blue[500]',
//       },
//     },
//     cssOutlinedInput: {
//       '&$cssFocused $notchedOutline': {
//         borderColor: 'blue[500]',
//       },
//     },
//   });


  
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            isActivatedButton: false,
            name:"",
            email:"",
            company:"",
            phone:"",
            message:"",
        }
    //    this.initialState = this.state;
    }

    componentDidMount(){
        document.title = "Mahipal Reddy/contact"
    }

    // resetState = () => {
    //     const init = this.initialState;
    //     this.setState(state=>{
    //         return {
    //             state: init
    //         }
    //     })
    // }

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
            constraints["name"] = getRequiredField();
            constraints["email"] = getRequiredEmailAddress();
            // constraints["company"] = getRequiredField();
            // constraints["phone"] = getPhoneNumberField();
            // constraints["message"] = getRequiredField();
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
            if((this.state.email == "" )||(this.state.name == "")) {
                this.setState({isActivatedButton: false});
            } else {
                this.setState({isActivatedButton: true});
            }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = this.runValidations(this.state);
   
        if (validationErrors) {
          this.setState({error: validationErrors});
        } else {
          delete this.state.error;
          this.props.dispatch(SendMessageActions.sendMessage(this.state));
        }

    }

    render(){
        let sendButton = (<button 
                            type="submit" 
                            className={`mt-3 core-btn ${this.state.isActivatedButton ? ' activatedButton' : " disabled"}`}
                            onClick={this.handleSubmit}
                            disabled={!this.state.isActivatedButton}
                            >
                            Send Your Message
                            </button>);
        if(this.props.contactReducer.fetching){
            sendButton=(<button 
                            type="submit" 
                            className={`mt-3 core-btn activatedButton loading be-inline`}
                            style={{display:"inline-block"}}
                            >
                            <div className="be-inline pr-2">Sending</div>
                            <div className="be-inline">
                                <PulseLoader
                                  sizeUnit={"px"}
                                  size={5}
                                  color={'#fff'}
                                  loading={true}
                                />
                            </div>
                        </button>);
        }
        let responseMessage=null;
        
        if(this.props.contactReducer.isSuccess){
            responseMessage =(<Col xs="12" className="animated5 fadeIn"><Alert color="success">Thanks for being awesome! Will reach you soon!</Alert></Col>)
            this.props.contactReducer.isSuccess = false
        }

        if(this.props.contactReducer.isFailed){
            responseMessage =(<Col xs="12" className="animated5 fadeIn"><Alert color="info">Sorry, something went wrong! You can e-mail/call me directly instead</Alert></Col>)
            this.props.contactReducer.isFailed = false
        }

        const styles = {
            root: {
              background: "white"
            },
            input: {
              color: "white"
            }
          };

        return (
            <div className="page-content">
                <PageControls goto="/work" spanN="my work" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row className="animated fadeInDown">
                        <Col className="text-center">
                            <h2 className="main-heading ">Say Hello</h2>
                            <h5 className="main-subheading">Have a question or want to work together?</h5>
                        </Col>
                    </Row>
                    <Row className="col-md-12 be-center contact-items-container animated fadeInRight">
                        <Col md='4' className='contact-item'>
                            <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x core-2"></i>
                            <i className="fas fa-map-marker-alt fa-stack-1x fa-inverse"></i>
                            </span>
                            <p>Jacksonville, Florida</p>
                        </Col>
                        <Col md='4' className='contact-item'>
                            <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x core-2"></i>
                            <i className="far fa-envelope fa-stack-1x fa-inverse"></i>
                            </span>
                            <p>mahipalr369@gmail.com</p>
                        </Col>
                        <Col md='4' className='contact-item'>
                            <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x core-2"></i>
                            <i className="fas fa-phone fa-stack-1x fa-inverse"></i>
                            </span>
                            <p>+1 712 328 5679</p>
                        </Col>      
                    </Row>
                    <Row className="col-md-12 be-center contact-form-container animated fadeInLeft">
                        <Col xs="12"><h4 className='pb-2'>I'm available for work, get in touch </h4></Col>
                        {responseMessage}
                        <Col xs='12' md="6">
                            <TextField
                                id="name"
                                label="Name"
                                autoComplete={false}
                                className={styles.root}
                                value={this.state['name']}
                                onChange={(event) => this.update("name", event.target.value)}
                                error={this.getErrorMessage("name", this.state.error)}
                                helperText={this.getErrorMessage("name", this.state.error)}
                                fullWidth={true}
                                margin="normal"
                                variant="filled"
                            />
                        </Col>
                        <Col xs='12' md="6">
                            <TextField
                                id="company"
                                label="Company"
                                autoComplete={false}
                                value={this.state['company']}
                                onChange={(event) => this.update("company", event.target.value)}
                                error={this.getErrorMessage("company", this.state.error)}
                                helperText={this.getErrorMessage("company", this.state.error)}
                                fullWidth={true}
                                margin="normal"
                                variant="filled"
                            />
                        </Col>
                        <Col xs='12' md="6">
                            <TextField
                                id="email"
                                label="E-mail"
                                autoComplete={false}
                                value={this.state['email']}
                                onChange={(event) => this.update("email", event.target.value)}
                                error={this.getErrorMessage("email", this.state.error)}
                                helperText={this.getErrorMessage("email", this.state.error)}
                                fullWidth={true}
                                margin="normal"
                                variant="filled"
                            />
                        </Col>
                        <Col xs='12' md="6">
                            <TextField
                                id="phone"
                                label="Phone Number"
                                autoComplete={false}
                                value={this.state['phone']}
                                onChange={(event) => this.update("phone", event.target.value)}
                                error={this.getErrorMessage("phone", this.state.error)}
                                helperText={this.getErrorMessage("phone", this.state.error)}
                                fullWidth={true}
                                margin="normal"
                                variant="filled"
                            />
                        </Col>
                        <Col xs='12'>
                            <TextField
                                id="message"
                                label="Message"
                                autoComplete="false"
                                multiline
                                rows='4'
                                value={this.state['message']}
                                onChange={(event) => this.update("message", event.target.value)}
                                error={this.getErrorMessage("message", this.state.error)}
                                helperText={this.getErrorMessage("message", this.state.error)}
                                fullWidth={true}
                                margin="normal"
                                variant="filled"
                            />
                        </Col>
                        <Col className="text-right">
                            {sendButton}
                        </Col> 
                    </Row>
                    <Row className="social-items-container be-center animated fadeInRight">
                        {/* <Col xs='12' className='text-left pl-2'><h4>Let's get social</h4></Col> */}
                        <Col>
                            <a href="https://www.linkedin.com/in/mahipalr369" target='blank'>
                                <button className="core-btn linkedInButton mr-2 mb-3">
                                <i className="fab fa-linkedin-in pr-2"></i>LINKEDIN</button>
                            </a>
                                
                            <button className="core-btn fbButton mr-2 mb-3">
                            <i className="fab fa-facebook-f pr-2"></i>FACEBOOK</button>
                            
                            <button className="core-btn githubButton mr-2 mb-3">
                            <i className="fab fa-github pr-2"></i>GITHUB</button>

                            <button className="core-btn twitterButton mr-2 mb-3">
                            <i className="fab fa-twitter pr-2"></i>TWITTER</button>
                            
                            <button className="core-btn instaButton mr-2 mb-3">
                            <i className="fab fa-instagram pr-2"></i>INSTAGRAM</button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (store) => {
    return {
        contactReducer: store.ContactReducer,
    }
}

export default connect(mapStateToProps)(Contact);