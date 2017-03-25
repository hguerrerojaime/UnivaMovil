import Login from '../components/Login';
import Home from '../components/Home';
import React from 'react';

let routes = {
  'login': <Login />,
  'home': <Home />
};

let renderScene = (route,navigator) => {
  return routes[route.id];
};

export default routes;
