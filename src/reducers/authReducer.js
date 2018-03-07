import { AUTH_USER, UNAUTH_USER } from '../constants/auth';

const INITIAL_STATE = { 
  authenticated: false, 
  message: ''
};

export default (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, message: '' };
    case UNAUTH_USER:
      return { ...state, authenticated: false, message: '' };
  }

  return state;
}