// reducer for authentication

import { ActionTypes } from '../actions';

const AuthReducer = (state = { authenticated: false, user: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true, id: action.payload.id, role: action.payload.role, company: action.payload.company };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default AuthReducer;
