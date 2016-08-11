import { ActionTypes } from '../actions';

const CompanyReducer = (state = { all: [], currentPost: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMP:
      return { ...state, all: action.payload, currentPost: state.currentPost };
    case ActionTypes.FETCH_POST:
      return { ...state, all: [], currentPost: action.payload };
    case ActionTypes.CREATE_COMP:
      return { ...state, all: action.payload, currentPost: state.currentPost };
    default:
      return state;
  }
};

export default CompanyReducer;
