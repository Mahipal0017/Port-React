import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './routes/routes';
import './index.scss';
import fire from './config/fire';

const authListner = () => {
    fire.auth().onAuthStateChanged(user=> {
        if(user){
            this.setState({
                user: user
            })
        } else {
            this.setState({ user: null});
        }

    })
}

const app = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(
    app , 
    document.getElementById('root'));

