import { combineReducers } from 'redux';

import AnnouncementReducer from './announcement-reducer';
import CompanyReducer from './company-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  announcements: AnnouncementReducer,
  companies: CompanyReducer,
  users: UserReducer,
});

export default rootReducer;
// will need to put this in later
