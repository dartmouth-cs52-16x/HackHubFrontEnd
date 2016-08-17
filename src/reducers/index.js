import { combineReducers } from 'redux';

import AnnouncementReducer from './announcement-reducer';
import CompanyReducer from './company-reducer';
import UserReducer from './user-reducer';
import authReducer from './auth-reducer';

const rootReducer = combineReducers({
  announcements: AnnouncementReducer,
  companies: CompanyReducer,
  users: UserReducer,
  auth: authReducer,
});

export default rootReducer;
// will need to put this in later
