import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomepageLayouts from "./home";

import Login from './Authentication/Login';
import Signup from './Authentication/Signup';
import ProfileInput from './Profile/Input';

import Counter from '../containers/CounterContainer';

export default () => (
  <Router>
    <Route exact path="/" component={HomepageLayouts} />
    <Route path="/counter" component={Counter} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/profile" component={ProfileInput} />
  </Router>
)