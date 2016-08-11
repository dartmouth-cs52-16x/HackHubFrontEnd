import { ActionTypes } from '../actions';

<<<<<<< HEAD
const CompanyReducer = (state = { all: [], currentCompany: null }, action) => {
=======
const CompanyReducer = (state = { all: [] }, action) => {
>>>>>>> f08c39e39f26b7a179e1753565c17a37c032ba61
  switch (action.type) {
    case ActionTypes.FETCH_COMP:
      return { ...state, all: action.payload.all };
    case ActionTypes.CREATE_COMP:
      return { ...state, all: action.payload.all };
    default:
      return state;
  }
};

export default CompanyReducer;
