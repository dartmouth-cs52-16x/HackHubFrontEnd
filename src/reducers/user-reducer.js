import { ActionTypes } from '../actions';

const UserReducer = (state = { all: [], user: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};

export default UserReducer;
