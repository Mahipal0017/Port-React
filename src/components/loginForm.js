import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import Input from './UI/input';

import * as actions from '../actions/index';

class Login extends Component {
    state = {
        isSignUp:false,
        loginForm:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validations: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validations: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        }
    }

    validator(value, rules) {
        let isValid = true;
        if(!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length >= rules.maxLength && isValid;
        }

        if(rules.isEmail) {
            const pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
            isValid = pattern.test(value) && isValid;
        }

        if(rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
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
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event => this.inputChangedHandler(event,formElement.id)} />
        ))

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
                    {form}
                    <Button color='success' outline> {signInUpButton} </Button>
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