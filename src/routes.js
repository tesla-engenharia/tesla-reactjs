import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './config/Reactotron';

import { Provider } from 'react-redux';
import store from './store';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import SideDrawer from './components/SideDrawer';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ height: '100%' }}>
        <SideDrawer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/servicos" component={Servicos} />
          <Route path="/blog" component={Blog} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Routes;
