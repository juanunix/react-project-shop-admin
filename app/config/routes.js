import React from 'react';

// react-router
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// Components
import Main from '../components/Main';
import Register from '../components/login-register/Register';
import Login from "../components/login-register/Login";
import Logout from '../components/login-register/Logout';
import Catalog from '../components/secure/Catalog';
import Orders from '../components/secure/Orders';
import Home from "../components/Home";
import requireAuth from '../utils/authenticated';

// Routes
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="catalog" component={Catalog} onEnter={requireAuth}/>
      <Route path="orders" component={Orders} onEnter={requireAuth}/>
    </Route>
  </Router>
);

module.exports = routes;
