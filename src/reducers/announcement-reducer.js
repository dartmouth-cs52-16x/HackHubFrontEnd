// reducer for announcements

import { ActionTypes } from '../actions';

const AnnouncementReducer = (state = { all: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ANNS:
      return { ...state, all: action.payload.all };
    case ActionTypes.CREATE_ANNS:
      return { ...state, all: action.payload.all };
    case ActionTypes.DELETE_ANNS:
      return { ...state, all: action.payload.all };
    default:
      return state;
  }
};

export default AnnouncementReducer;
