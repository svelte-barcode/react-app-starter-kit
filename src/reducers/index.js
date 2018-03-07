import {combineReducers} from 'redux';

import AuthReducer from './authReducer';
import UserReducer from './userReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;