import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loginFormSubmit = () => {
    return {
        type: actionTypes.LOGIN_FORM_SUBMIT
    };
};

export const loginFormSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_FORM_SUCCESS,
        data
    };
};

export const loginFormFail = (error) => {
    return {
        type: actionTypes.LOGIN_FORM_FAIL,
        error
    };
};

export const submitForm = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(loginFormSubmit());
        const formData = {
            email,
            password,
            returnSecureToken: true,
        }

        const API_KEY= 'AIzaSyArdj452mX1ZMBsl9FsaSqr9_HAY05SWds'; 
        let URL= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';
        if(isSignUp) {
            URL= 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser';
        }
        axios.post(`${URL}?key=${API_KEY}`, formData)
            .then( response => {
                console.log(response);
                dispatch(loginFormSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(loginFormFail(err))
            })
    };
};