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
        loginForm:{
            email:{
                value: '',
            },
            password: {
                value: '',
            }
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
    
    inputChangedHandler = (event, inputElementId) => {
        const updatedLoginForm = {
            ...this.state.loginForm,
            [inputElementId]: {
                ...this.state.loginForm[inputElementId],
                value: event.target.value,
                valid: this.validator(event.target.value, this.state.loginForm[inputElementId].validation),
                touched: true
            }
        }

        this.setState({loginForm: updatedLoginForm});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.submitForm(this.state.loginForm.email.value, this.state.loginForm.password.value, this.state.isSignUp);
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
               <form onSubmit={this.submitHandler}>
                    <Button color='link' onClick={this.clickHereHandler}>Click here to {signInUp}</Button>
                    <UIInputputFiled 
                        label="TEST"
                        name="test"
                        placeholder="test"
                        defaultValue={this.state.loginForm.email.value}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        layout="FLAT"
                        errorMessage={this.getErrorMessage("test", this.state.error)}
                    />
                    <UIInputputFiled 
                        label="TEST"
                        name="test"
                        placeholder="test"
                        defaultValue={this.state.loginForm.password.value}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        layout="FLAT"
                        errorMessage={this.getErrorMessage("test", this.state.error)}
                    />
                    <Button color='success' outline onClick={this.handleSubmit}> {signInUpButton} </Button>
                </form> 
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