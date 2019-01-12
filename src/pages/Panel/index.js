import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';

import {
  FaPlus, FaSignOutAlt, FaPen, FaTrash,
} from 'react-icons/fa';

import {
  Container, SideBar, Items, Item,
} from './styles';

class Panel extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    authLogout: PropTypes.func.isRequired,
  };

  static defaultProps = {
    history: {},
  };

  handleLogoutClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('@Tesla:token');
    this.props.authLogout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <Container>
        <SideBar>
          <Items>
            <Item href="#" texto="Criar um post">
              <FaPlus />
            </Item>
            <Item href="#" texto="Editar um post">
              <FaPen />
            </Item>
            <Item href="#" texto="Deletar um post">
              <FaTrash />
            </Item>
          </Items>
          <Items>
            <Item onClick={this.handleLogoutClick} texto="Sair">
              <FaSignOutAlt />
            </Item>
          </Items>
        </SideBar>
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
)(withRouter(Panel));
