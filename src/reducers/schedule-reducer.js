import { ActionTypes } from '../actions';

const ScheduleReducer = (state = { all: [] }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SCHED:
      return { ...state, all: action.payload.all };
    case ActionTypes.CREATE_SCHED:
      return { ...state, all: action.payload.all };
    case ActionTypes.UPDATE_SCHED:
      return { ...state, all: action.payload.all };
    default:
      return state;
  }
};

export default ScheduleReducer;
