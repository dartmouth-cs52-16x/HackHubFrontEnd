import { ActionTypes } from '../actions';

const HelpReducer = (state = { all: [], id: null }, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_HELP:
      return { ...state, all: action.payload.all };
    case ActionTypes.FETCH_HELP:
      return { ...state, all: action.payload.all };
    // case ActionTypes.DEAUTH_USER:
    //   return { ...state, authenticated: false };
    // case ActionTypes.AUTH_ERROR:
    //   return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default HelpReducer;
