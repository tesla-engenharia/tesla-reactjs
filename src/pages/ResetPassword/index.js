import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import queryString from "query-string";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Tau from "~/assets/tau.png";

import { FaCircleNotch } from "react-icons/fa";
import "~/styles/loading.css";

import { Container, LoginBox } from "./styles";

class ResetPassword extends Component {
  state = {
    password: "",
    password_confirmation: ""
  };

  static propTypes = {
    login: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired,
    resetPasswordRequest: PropTypes.func.isRequired
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.state.password !== this.state.password_confirmation) {
      toast.warn("As senhas que você digitou são diferentes");
    } else {
      const { token } = queryString.parse(this.props.location.search);
      this.props.resetPasswordRequest(
        token,
        this.state.password,
        this.state.password
      );
    }
  };

  render() {
    const { loading } = this.props.login;

    return (
      <Container>
        <img src={Tau} alt="Logotipo da Tesla" />
        <LoginBox>
          <h1>Resetar a senha</h1>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="password"
              placeholder="Digite seu nova senha"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Confirme seu nova senha"
              value={this.state.password_confirmation}
              onChange={e =>
                this.setState({ password_confirmation: e.target.value })
              }
              required
            />
            <button type="submit">
              {loading ? <FaCircleNotch className="icon-spin" /> : "Salvar"}
            </button>
          </form>
          <Link to="/login">Ir para a página de login</Link>
        </LoginBox>
        <ToastContainer autoClose={3000} />
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
)(ResetPassword);
