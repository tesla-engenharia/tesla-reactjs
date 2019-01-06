import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';

import Tau from '~/assets/tau.png';

import { FaCircleNotch } from 'react-icons/fa';
import '~/styles/loading.css';

import { Container, LoginBox } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    authRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
    }).isRequired,
    history: PropTypes.object,
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    this.props.authRequest(this.state.email, this.state.password, this.props.history);
  };

  render() {
    const { loading } = this.props.login;

    return (
      <Container>
        <img src={Tau} alt="Logotipo da Tesla" />
        <LoginBox>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmitForm}>
            <input
              type="email"
              placeholder="Seu email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Sua senha secreta"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">
              {loading ? <FaCircleNotch className="icon-spin" /> : 'Entrar'}
            </button>
          </form>
          <a href="/">Esqueci a senha</a>
        </LoginBox>
      </Container>
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
)(Login);
