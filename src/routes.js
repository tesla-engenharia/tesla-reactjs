import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import asyncComponent from "./components/AsyncComponent/index";

import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";

const AsyncLogin = asyncComponent(() => import("./pages/Login"));
const AsyncPanel = asyncComponent(() => import("./pages/Panel"));
const AsyncForgotPassword = asyncComponent(() =>
  import("./pages/ForgotPassword")
);
const AsyncResetPassword = asyncComponent(() =>
  import("./pages/ResetPassword")
);
const AsyncUserCreate = asyncComponent(() => import("./pages/UserCreate"));

class Routes extends Component {
  static propTypes = {
    login: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired
    }).isRequired
  };

  render() {
    return (
      <BrowserRouter>
        <FullscrenWrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servicos" component={Servicos} />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/login"
              render={props =>
                this.props.login.isAuthenticated ? (
                  <Redirect
                    to={{ pathname: "/panel", state: { from: props.location } }}
                  />
                ) : (
                  <AsyncLogin />
                )
              }
            />
            <Route
              exact
              path="/panel"
              render={props =>
                this.props.login.isAuthenticated ? (
                  <AsyncPanel />
                ) : (
                  <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                  />
                )
              }
            />
            <Route exact path="/forgot" component={AsyncForgotPassword} />
            <Route exact path="/reset" component={AsyncResetPassword} />
            <Route exact path="/user/create" component={AsyncUserCreate} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </FullscrenWrapper>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);

const FullscrenWrapper = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
