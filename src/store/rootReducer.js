import { combineReducers } from 'redux';
import SignUpReducer from '../reducers/SignUpReducer';
import SignInReducer from '../reducers/SignInReducer';

const rootReducer = combineReducers({
    SignUpReducer,
    SignInReducer
});

export default rootReducer;