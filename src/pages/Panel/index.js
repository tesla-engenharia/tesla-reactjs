import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "~/store/ducks/login";

import {
  FaPlus,
  FaSignOutAlt,
  FaPen,
  FaTrash,
  FaFileUpload
} from "react-icons/fa";

import { Container, SideBar, Items, Item } from "./styles";

import DeletarPost from "./DeletarPost";
import UparImagem from "./UparImagem";
import EditarPost from "./EditarPost";
import CriarPost from "./CriarPost";

class Panel extends Component {
  state = {
    page: "criar"
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }),
    authLogout: PropTypes.func.isRequired
  };

  static defaultProps = {
    history: {}
  };

  handleLogoutClick = e => {
    e.preventDefault();
    localStorage.removeItem("@Tesla:token");
    this.props.authLogout();
    this.props.history.push("/login");
  };

  render() {
    return (
      <Container>
        <SideBar>
          <Items>
            <Item
              texto="Criar um post"
              onClick={() => this.setState({ page: "criar" })}
            >
              <FaPlus />
            </Item>
            <Item
              texto="Upar um arquivo"
              onClick={() => this.setState({ page: "upar" })}
            >
              <FaFileUpload />
            </Item>
          </Items>
          <Items>
            <Item onClick={this.handleLogoutClick} texto="Sair">
              <FaSignOutAlt />
            </Item>
          </Items>
        </SideBar>
        <Content page={this.state.page} />
      </Container>
    );
  }
}

const Content = ({ page }) => {
  switch (page) {
    case "criar":
      return <CriarPost />;
    case "editar":
      return <EditarPost />;
    case "deletar":
      return <DeletarPost />;
    case "upar":
      return <UparImagem />;
    default:
      return <h1>{page}</h1>;
  }
};

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Panel));
