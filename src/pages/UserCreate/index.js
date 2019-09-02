import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "~/store/ducks/user";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { MdRefresh } from "react-icons/md";
import "~/styles/loading.css";

import { Container, LoginBox } from "./styles";

import { Helmet } from "react-helmet";
class UserCreate extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  static propTypes = {
    user: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired,
    createRequest: PropTypes.func.isRequired
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.state.password !== this.state.password_confirmation) {
      toast.warn("As senhas que você digitou são diferentes");
    } else {
      this.props.createRequest(
        this.state.name,
        this.state.email,
        this.state.password
      );
    }
  };

  render() {
    const { loading } = this.props.user;

    return (
      <Container>
        <Helmet>
          <title>Tesla Engenharia | Criar conta</title>
          <meta
            name="Criar conta"
            description="Crie sua conta para acessar o painel"
          />
          <meta name="robots" content="noindex" />
        </Helmet>
        <LoginBox>
          <h1>Criação de conta</h1>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="text"
              placeholder="Seu nome"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              required
            />
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
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={this.state.password_confirmation}
              onChange={e =>
                this.setState({ password_confirmation: e.target.value })
              }
              required
            />
            <button type="submit">
              {loading ? <MdRefresh className="icon-spin" /> : "Criar"}
            </button>
          </form>
          <Link to="/login">Ir para a página de login</Link>
        </LoginBox>
        <ToastContainer autoClose={3000} toastClassName="round-toast" />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreate);
