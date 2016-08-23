import { ActionTypes } from '../actions';

const HelpReducer = (state = { all: [], id: null }, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_HELP:
      return { ...state, all: action.payload.all };
    case ActionTypes.FETCH_HELP:
      return { ...state, all: action.payload.all };
    case ActionTypes.DELETE_HELP:
      return { ...state, all: action.payload.all };
    // case ActionTypes.AUTH_ERROR:
    //   return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default HelpReducer;
