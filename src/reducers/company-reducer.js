import { ActionTypes } from '../actions';

const CompanyReducer = (state = { all: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMP:
      return { ...state, all: action.payload.all };
    case ActionTypes.CREATE_COMP:
      return { ...state, all: action.payload.all };
    case ActionTypes.DELETE_COMP:
      return { ...state, all: action.payload.all };
    default:
      return state;
  }
};

export default CompanyReducer;
