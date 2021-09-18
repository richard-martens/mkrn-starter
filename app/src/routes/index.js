import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import ForgotPassword from '../components/authentication/forgot-password';
import ResetPassword from '../components/authentication/reset-password';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated/';
import Settings from '../components/settings/settings';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password/:token" component={ResetPassword} />
    <Route path="/dashboard" component={RequireAuth(AuthenticatedRoutes)} />
    <Route path="/settings" component={RequireAuth(Settings)} />
  </Switch>
);

export default TopLevelRoutes;
