import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "~/store/ducks/user";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaCircleNotch } from "react-icons/fa";
import "~/styles/loading.css";

import { Container, LoginBox } from "./styles";

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
              {loading ? <FaCircleNotch className="icon-spin" /> : "Criar"}
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
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreate);
