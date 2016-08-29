// reducer for companies

import { ActionTypes } from '../actions';

const CompanyReducer = (state = { all: [], comp: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COMPS:
      return { ...state, all: action.payload.all };
    case ActionTypes.CREATE_COMP:
      return { ...state, all: action.payload.all };
    case ActionTypes.DELETE_COMP:
      return { ...state, all: action.payload.all };
    case ActionTypes.FETCH_COMP:
      return { ...state, comp: action.payload.comp };
    case ActionTypes.UPDATE_COMP:
      return { ...state, comp: action.payload.comp };
    default:
      return state;
  }
};

export default CompanyReducer;
