import { combineReducers } from 'redux';

import AnnouncementReducer from './announcement-reducer';
import CompanyReducer from './company-reducer';
import UserReducer from './user-reducer';
import authReducer from './auth-reducer';
import HelpReducer from './help-reducer';
import ScheduleReducer from './schedule-reducer';

const rootReducer = combineReducers({
  announcements: AnnouncementReducer,
  companies: CompanyReducer,
  users: UserReducer,
  auth: authReducer,
  help: HelpReducer,
  schedule: ScheduleReducer,
});

export default rootReducer;
// will need to put this in later
