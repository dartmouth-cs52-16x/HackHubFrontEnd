import { combineReducers } from 'redux';

import AnnouncementReducer from './announcement-reducer';

const rootReducer = combineReducers({
  announcements: AnnouncementReducer,
});

export default rootReducer;
// will need to put this in later
