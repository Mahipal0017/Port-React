import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

let middleware = composeWithDevTools(applyMiddleware(thunk, promise));
const store = createStore(rootReducer, middleware);

export default store;
