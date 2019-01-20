import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import asyncComponent from "./components/AsyncComponent/index";

import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Footer from "./components/Footer";

const AsyncHome = asyncComponent(() => import("./pages/Home"));
const AsyncServicos = asyncComponent(() => import("./pages/Servicos"));
const AsyncBlog = asyncComponent(() => import("./pages/Blog"));
const AsyncLogin = asyncComponent(() => import("./pages/Login"));
const AsyncPanel = asyncComponent(() => import("./pages/Panel"));
const AsyncNotFound = asyncComponent(() => import("./pages/NotFound"));
const AsyncForgotPassword = asyncComponent(() =>
  import("./pages/ForgotPassword")
);
const AsyncResetPassword = asyncComponent(() =>
  import("./pages/ResetPassword")
);
const AsyncUserCreate = asyncComponent(() => import("./pages/UserCreate"));
const AsyncPostDetail = asyncComponent(() => import("./pages/PostDetail"));

class Routes extends Component {
  static propTypes = {
    login: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired
    }).isRequired
  };

  render() {
    return (
      <BrowserRouter>
        <div style={{ position: "relative", minHeight: "100%" }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <SideDrawer />
                  <Header />
                  <AsyncHome />
                  <Footer />
                </Fragment>
              )}
            />
            <Route
              path="/servicos"
              render={() => (
                <Fragment>
                  <SideDrawer />
                  <Header />
                  <AsyncServicos />
                  <Footer />
                </Fragment>
              )}
            />
            <Route
              path="/blog"
              render={() => (
                <Fragment>
                  <SideDrawer />
                  <Header />
                  <AsyncBlog />
                  <Footer />
                </Fragment>
              )}
            />
            <Route
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
            <Route path="/forgot" component={AsyncForgotPassword} />
            <Route path="/reset" component={AsyncResetPassword} />
            <Route path="/user/create" component={AsyncUserCreate} />
            <Route
              path="/post/:id"
              render={props => (
                <Fragment>
                  <SideDrawer />
                  <Header />
                  <AsyncPostDetail {...props} />
                  <Footer />
                </Fragment>
              )}
            />
            <Route
              path="*"
              render={() => (
                <Fragment>
                  <SideDrawer />
                  <Header />
                  <AsyncNotFound />
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
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
