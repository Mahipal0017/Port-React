import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

import UIInputputFiled from '../components/UI/UIInputField';

import { getRequiredField } from './modules/ConstraintsHelper';
import * as Utility from './modules/Utility';

import * as actions from '../actions/index';

class Login extends Component {
    state = {
        isSignUp:false,
        email:'',
        password:''
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
            constraints["email"] = getRequiredField();
            constraints["password"] = getRequiredField();
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

    clickHereHandler = () => {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }

    render() {
        let signInUp = 'Register';
        let signInUpButton= 'Sign In';
        
        if(this.state.isSignUp){
            signInUp = 'SignIn';
            signInUpButton= 'Register';
        }

        return (
            <div className="loginForm">
                    <Button color='link' onClick={this.clickHereHandler}>Click here to {signInUp}</Button>
                    <UIInputputFiled 
                        label="Email:"
                        name="Email"
                        placeholder="Enter your email here"
                        defaultValue={this.state.email}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("test", this.state.error)}
                    />
                    <UIInputputFiled 
                        label="Password:"
                        name="Password"
                        placeholder="Enter your password here"
                        defaultValue={this.state.password}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("test", this.state.error)}
                    />
                    <Button color='success' outline onClick={this.handleSubmit}> {signInUpButton} </Button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (email, password, isSignUp) => dispatch( actions.submitForm(email, password, isSignUp) ),
    }
}

export default connect (null, mapDispatchToProps)(Login);