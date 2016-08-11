import { ActionTypes } from '../actions';

const AnnouncementReducer = (state = { all: [], currentPost: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ANNS:
      return { all: action.payload, currentPost: state.currentPost };
    case ActionTypes.FETCH_POST:
      return { all: [], currentPost: action.payload };
    case ActionTypes.CREATE_ANN:
      return { all: action.payload, currentPost: state.currentPost };
    default:
      return state;
  }
};

export default AnnouncementReducer;
