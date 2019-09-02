import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "~/styles/toast.css";

import { MdRefresh } from "react-icons/md";
import "~/styles/loading.css";

import { Container, LoginBox } from "./styles";

import { Helmet } from "react-helmet";

class ForgotPassword extends Component {
  state = {
    email: ""
  };

  static propTypes = {
    requestNewPassword: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool.isRequired
    }).isRequired
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.requestNewPassword(this.state.email);
  };

  render() {
    const { loading } = this.props.login;

    return (
      <Container>
        <Helmet>
          <title>Tesla Engenharia | Esqueci a senha</title>
          <meta
            name="Esqueci a senha"
            description="Insira seu e-mail para recuperar a senha"
          />
          <meta
            name="keywords"
            content="senha, recuperação de senha, esqueci a senha, Tesla Engenharia"
          />
        </Helmet>
        <LoginBox>
          <h1>Esqueci a senha</h1>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="email"
              placeholder="Digite seu email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
            <button type="submit">
              {loading ? <MdRefresh className="icon-spin" /> : "Recuperar"}
            </button>
          </form>
          <Link to="/login">Voltar</Link>
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
)(ForgotPassword);
