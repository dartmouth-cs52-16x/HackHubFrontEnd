import React from 'react';
import { Route, IndexRoute } from 'react-router';
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
import MyProfile from './components/my-profile';
import CompanyShow from './components/company_show';
import Directory from './components/user-directory';
import Home from './components/home';
import Error from './components/error';
import RequireAuth from './components/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/schedule" component={RequireAuth(Schedule)} />
    <Route path="/announcements" component={RequireAuth(Announcements)} />
    <Route path="/companies" component={RequireAuth(Companies)} />
    <Route path="/new_company" component={RequireAuth(NewCompanyProfile)} />
    <Route path="/companies/:id" component={RequireAuth(CompanyShow)} />
    <Route path="/directory" component={RequireAuth(Directory)} />
    <Route path="/help" component={RequireAuth(Help)} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signout" component={SignOut} />
    <Route path="/users/:id" component={RequireAuth(UserProfile)} />
    <Route path="/my_profile" component={RequireAuth(MyProfile)} />
    <Route path="/error" component={Error} />
  </Route>
);
