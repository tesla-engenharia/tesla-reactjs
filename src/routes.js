import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './config/Reactotron';

import { Provider } from 'react-redux';
import store from './store';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Panel from './pages/Panel';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import SideDrawer from './components/SideDrawer';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div style={{ height: '100%' }}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <SideDrawer />
                <Header />
                <Home />
              </Fragment>
            )}
          />
          <Route
            path="/servicos"
            render={() => (
              <Fragment>
                <SideDrawer />
                <Header />
                <Servicos />
              </Fragment>
            )}
          />
          <Route
            path="/blog"
            render={() => (
              <Fragment>
                <SideDrawer />
                <Header />
                <Blog />
              </Fragment>
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/panel" component={Panel} />
          <Route
            path="*"
            render={() => (
              <Fragment>
                <SideDrawer />
                <Header />
                <NotFound />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Routes;
