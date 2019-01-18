import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MenuActions } from "~/store/ducks/menu";

import { SocialMedia as socialMedia } from "~/config/SocialMedia";

import { FaBars } from "react-icons/fa";

import Tau from "~/assets/tau.png";

import { colors, metrics } from "~/styles";
import { Bar, Toolbox, Navigation, Social, Logo, Menu } from "./styles";

class Header extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    updateActive: PropTypes.func.isRequired,
    openSideDrawer: PropTypes.func.isRequired,
    menu: PropTypes.shape({
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          page: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      pageActive: PropTypes.shape({
        name: PropTypes.string.isRequired,
        page: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  componentDidMount() {
    const { location } = this.props;

    const active = this.props.menu.pages.find(
      menuItem => menuItem.page === location.pathname
    );

    if (active) {
      this.props.updateActive(active);
    } else {
      this.props.updateActive({ name: "404", page: location.pathname });
    }
  }

  handleOpenSideDrawer = () => {
    this.props.openSideDrawer(true);
  };

  handleClick = menuItem => {
    this.props.updateActive(menuItem);
  };

  render() {
    const activeStyle = {
      color: colors.white,
      borderBottomStyle: "solid",
      borderBottomWidth: 2,
      borderBottomColor: "#fff",
      paddingBottom: 5
    };

    return (
      <Bar>
        <Toolbox>
          <MediaQuery query={`(min-width: ${metrics.contentWidth}px)`}>
            <Navigation>
              <Logo src={Tau} alt="Logotipo da Tesla" />

              <Menu>
                {this.props.menu.pages.map((menuItem, actualIndex) => (
                  <Link
                    key={actualIndex}
                    style={
                      this.props.menu.pageActive.name === menuItem.name
                        ? activeStyle
                        : {}
                    }
                    onClick={() => this.handleClick(menuItem)}
                    to={menuItem.page}
                  >
                    {menuItem.name}
                  </Link>
                ))}
              </Menu>
            </Navigation>

            <Social>
              {socialMedia.map((item, actualIndex) => (
                <a
                  key={actualIndex}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.alt} />
                </a>
              ))}
            </Social>
          </MediaQuery>

          <MediaQuery query={`(max-width: ${metrics.contentWidth}px)`}>
            <Navigation>
              <Logo src={Tau} alt="Logotipo da Tesla" mobile={true} />
              <button type="button" onClick={this.handleOpenSideDrawer}>
                <FaBars />
              </button>
            </Navigation>

            <MediaQuery query="(min-width: 350px)">
              <Social>
                {socialMedia.map((item, actualIndex) => (
                  <a
                    key={actualIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.icon} alt={item.alt} />
                  </a>
                ))}
              </Social>
            </MediaQuery>
          </MediaQuery>
        </Toolbox>
      </Bar>
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
  )(Header)
);
