import { FETCH_USERS } from '../constants/user';

const INITIAL_STATE = { 
  all: [],
};

export default (state = INITIAL_STATE, action) => {  
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, all: action.payload };
  }

  return state;
}