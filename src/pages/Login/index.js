import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { FaCircleNotch } from "react-icons/fa";
import "~/styles/loading.css";

import { Container, LoginBox } from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  static propTypes = {
    authRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.authRequest(this.state.email, this.state.password);
  };

  render() {
    const { loading } = this.props.login;

    return (
      <Container>
        <LoginBox>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="email"
              placeholder="Seu email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Sua senha secreta"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
            <button type="submit">
              {loading ? <FaCircleNotch className="icon-spin" /> : "Entrar"}
            </button>
          </form>
          <Link to="/forgot">Esqueci a senha</Link>
        </LoginBox>
        <ToastContainer autoClose={3000} toastClassName="round-toast" />
      </Container>
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
)(Login);
