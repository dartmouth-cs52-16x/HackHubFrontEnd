// reducer for users

import { ActionTypes } from '../actions';

const UserReducer = (state = { all: [], user: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return { ...state, user: action.payload.user };
    case ActionTypes.FETCH_USERS:
      return { ...state, all: action.payload.all };
    case ActionTypes.DELETE_USER:
      return { ...state, all: action.payload.all };
    default:
      return state;
  }
};

export default UserReducer;
