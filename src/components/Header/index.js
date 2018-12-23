/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';

import { colors } from '~/styles';

import Tau from '~/assets/tau.png';

import facebook from '~/assets/social_Face.png';
import instagram from '~/assets/social_Insta.png';
import twitter from '~/assets/social_Twitter.png';
import youtube from '~/assets/social_youtube.png';

import { Container, Content, Navigation } from './styles';

const menuItems = [
  {
    name: 'Início',
    page: '/',
  },
  {
    name: 'Serviços',
    page: '/servicos',
  },
  {
    name: 'Blog',
    page: '/blog',
  },
];

class Header extends Component {
  state = {
    active: {
      name: 'Início',
      page: '/',
    },
  };

  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { location } = this.props;

    const active = menuItems.find(menuItem => (menuItem.page === location.pathname));

    console.tron.log(active);

    active !== undefined ? this.setState({ active }) : this.setState({ active: { name: '', page: '' } });
  }

  handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    const activeStyle = {
      color: colors.white,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: '#fff',
      paddingBottom: 5,
    };

    return (
      <Container>
        <Content>
          <Navigation>
            <img src={Tau} alt="Logotipo da Tesla" />

            <div className="menu">
              {menuItems.map((menuItem, actualIndex) => (
                <Link
                  key={actualIndex}
                  style={this.state.active.name === menuItem.name ? activeStyle : {}}
                  onClick={() => this.handleClick(menuItem)}
                  to={menuItem.page}
                >
                  {menuItem.name}
                </Link>
              ))}
            </div>
          </Navigation>

          <div className="social">
            <a href="https://www.facebook.com/TeslaEJ/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook da Tesla" />
            </a>
            <a href="https://www.instagram.com/teslaej/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram da Tesla" />
            </a>
            <a href="/" target="_blank">
              <img src={twitter} alt="Twitter da Tesla" />
            </a>
            <a href="/" target="_blank">
              <img src={youtube} alt="Canal do Youtube da Tesla" />
            </a>
          </div>
        </Content>
      </Container>
    );
  }
}

export default withRouter(Header);
