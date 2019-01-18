import React, { Fragment, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MenuActions } from "~/store/ducks/menu";

import { Drawer, Backdrop } from "./styles";

import menuItems from "~/config/MenuItems";

class SideDrawer extends Component {
  state = {};

  static propTypes = {
    menu: PropTypes.shape({
      sideDrawer: PropTypes.bool.isRequired,
      pageActive: PropTypes.shape({
        name: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    openSideDrawer: PropTypes.func.isRequired,
    updateActive: PropTypes.func.isRequired
  };

  handleClose = () => {
    this.props.openSideDrawer(false);
  };

  handleRedirect = (name, page) => {
    this.props.updateActive({ name, page });
    this.handleClose();
  };

  render() {
    return (
      <Fragment>
        <Drawer open={this.props.menu.sideDrawer}>
          {menuItems.map((menuItem, actualIndex) => (
            <Link
              key={actualIndex}
              onClick={() => this.handleRedirect(menuItem.name, menuItem.page)}
              to={menuItem.page}
            >
              {menuItem.name}
            </Link>
          ))}
        </Drawer>

        <Backdrop
          open={this.props.menu.sideDrawer}
          onClick={this.handleClose}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MenuActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideDrawer)
);
