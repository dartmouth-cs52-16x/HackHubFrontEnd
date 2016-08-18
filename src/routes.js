import React from 'react';
import { Route } from 'react-router';
import Schedule from './components/schedule';
import App from './components/app';
import Announcements from './components/announcements';
import Companies from './components/companies';
import NewCompanyProfile from './components/new_company';
import Help from './components/help';
import SignIn from './components/signin';
import SignUp from './components/signup';
import SignOut from './components/signout';
import UserProfile from './components/user-profile';
import CompanyShow from './components/company_show';
import Directory from './components/user-directory';
// import RequireAuth from './components/require-auth';

export default(
  <Route path="/" component={App}>
    <Route path="/schedule" component={Schedule} />
    <Route path="/announcements" component={Announcements} />
    <Route path="/companies" component={Companies} />
    <Route path="/new_company" component={NewCompanyProfile} />
    <Route path="/companies/:id" component={CompanyShow} />
    <Route path="/directory" component={Directory} />
    <Route path="/help" component={Help} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signout" component={SignOut} />
    <Route path="/users/:id" component={UserProfile} />
  </Route>
);
