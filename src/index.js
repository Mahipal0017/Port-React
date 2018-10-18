import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Routes from './routes/routes';
import './index.scss';


const app = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

ReactDOM.render(
    app , 
    document.getElementById('root'));

