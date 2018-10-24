import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

import UIInputputFiled from '../components/UI/UIInputField';

import { getRequiredField } from './modules/ConstraintsHelper';
import * as Utility from './modules/Utility';


class Login extends Component {
    state = {
        isSignIn:false,
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

    handleSignInUp = () => {
        this.setState( state => {
           return {isSignIn: !state.isSignIn}
        })
    }

    render() {
        let signInUp = 'Sign In';
        let signInUpButton= 'Register';
        
        if(this.state.isSignIn){
            signInUp = 'Register';
            signInUpButton= 'Sign In';
        }

        return (
                <div className="loginForm">
                    <Button color='link' onClick={this.handleSignInUp}>Click here to {signInUp}</Button>
                    <UIInputputFiled 
                        label="Email:"
                        name="email"
                        placeholder="Enter your email here"
                        defaultValue={this.state.email}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("email", this.state.error)}
                    />
                    <UIInputputFiled 
                        label="Password:"
                        name="password"
                        type="password"
                        placeholder="Enter your password here"
                        defaultValue={this.state.password}
                        onValidatedChange= {this.update}
                        onChangeOverride={true} 
                        errorMessage={this.getErrorMessage("password", this.state.error)}
                    />
                    <Button color='success' outline onClick={this.handleSubmit}> {signInUpButton} </Button>
                </div>
        );
    }
}

export default connect ()(Login);