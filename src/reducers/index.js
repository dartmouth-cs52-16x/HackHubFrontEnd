import { combineReducers } from 'redux';

import AnnouncementReducer from './announcement-reducer';
import CompanyReducer from './company-reducer';

const rootReducer = combineReducers({
  announcements: AnnouncementReducer,
  companies: CompanyReducer,
});

export default rootReducer;
// will need to put this in later
