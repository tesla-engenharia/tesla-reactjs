import React, { Fragment, Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Panel from './pages/Panel';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import SideDrawer from './components/SideDrawer';
import ForgotPassword from './pages/ForgotPassword';

class Routes extends Component {
  state = {};

  static propTypes = {
    login: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
    }).isRequired,
  };

  render() {
    return (
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
            <Route
              path="/login"
              render={props => (this.props.login.isAuthenticated ? (
                <Redirect to={{ pathname: '/panel', state: { from: props.location } }} />
              ) : <Login />)}
            />
            <Route
              path="/panel"
              render={props => (this.props.login.isAuthenticated ? (
                <Panel />
              ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
              ))
              }
            />
            <Route
              path="/forgot"
              component={ForgotPassword}
            />
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
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);
